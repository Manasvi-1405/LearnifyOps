import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Read-only preparation: this helper never edits an active vhost or reloads Nginx.
// It deliberately rejects layouts outside the common combined-host Certbot setup.
export function prepareNginx(source) {
  const tokens = [...source.matchAll(/#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[{};]|[^\s{};#]+/g)]
    .filter(([text]) => !text.startsWith("#")).map((match) => ({text:match[0],start:match.index,end:match.index+match[0].length}));
  let cursor = 0;
  function parse(nested = false) {
    const nodes=[];
    while (cursor < tokens.length && tokens[cursor].text !== "}") {
      const parts=[];
      while (cursor < tokens.length && !["{","}",";"].includes(tokens[cursor].text)) parts.push(tokens[cursor++]);
      assert.ok(parts.length && tokens[cursor], "Unsupported or incomplete Nginx syntax; inspect manually");
      const separator=tokens[cursor++];
      const node={name:parts[0].text,args:parts.slice(1).map((token)=>token.text),start:parts[0].start,openEnd:separator.end};
      if(separator.text === "{") {
        node.children=parse(true);
        assert.equal(tokens[cursor]?.text,"}","Unbalanced Nginx block");
        node.end=tokens[cursor++].end;
      } else { assert.equal(separator.text,";","Unexpected closing brace"); node.end=separator.end; }
      nodes.push(node);
    }
    if(!nested) assert.equal(cursor,tokens.length,"Unexpected closing block");
    return nodes;
  }
  const servers=parse().filter((node)=>node.name === "server" && node.children);
  const names=(server)=>server.children.filter((node)=>node.name === "server_name").flatMap((node)=>node.args);
  const listens=(server)=>server.children.filter((node)=>node.name === "listen");
  const owns=(server)=>names(server).some((name)=>["learnifyops.com","www.learnifyops.com"].includes(name));
  const targets=servers.filter(owns);
  assert.ok(targets.length,"No explicit LearnifyOps server block found");
  for(const server of targets) {
    assert.ok(names(server).every((name)=>["learnifyops.com","www.learnifyops.com"].includes(name)),"Refusing a block shared with another hostname");
    assert.ok(listens(server).length,"An explicit listen directive is required");
  }
  const secure=targets.filter((server)=>listens(server).some((node)=>/(?:^|:)443(?:\s|$)/.test(node.args.join(" "))));
  assert.equal(secure.length,1,"Expected one combined HTTPS block; inspect separate or unusual hosts manually");
  const main=secure[0];
  assert.deepEqual([...names(main)].sort(),["learnifyops.com","www.learnifyops.com"],"Expected both hostnames in the combined HTTPS block");
  assert.ok(listens(main).every((node)=>/(?:^|:)443(?:\s|$)/.test(node.args.join(" ")) && node.args.includes("ssl") && !node.args.includes("quic")),"Mixed HTTP/HTTPS or QUIC listeners require manual inspection");
  assert.ok(!main.children.some((node)=>["return","rewrite","if"].includes(node.name)),"Existing HTTPS server-level redirects require manual inspection");
  const root=main.children.find((node)=>node.name === "location" && node.args.includes("/"));
  const api=main.children.find((node)=>node.name === "location" && node.args.some((arg)=>["/api","/api/"].includes(arg)));
  const proxy=(node,port)=>node?.children?.some((child)=>child.name === "proxy_pass" && new RegExp(`^http://(?:127\\.0\\.0\\.1|localhost):${port}/?$`).test(child.args[0]));
  assert.ok(proxy(root,5174),"Expected existing location / proxy to port 5174");
  assert.ok(proxy(api,5001),"Expected existing /api proxy to port 5001");
  const tls=main.children.filter((node)=>node.name.startsWith("ssl_") || ["http2","http3"].includes(node.name) || node.name === "include");
  assert.ok(tls.some((node)=>node.name === "ssl_certificate") && tls.some((node)=>node.name === "ssl_certificate_key"),"Certificate paths must be explicit in the inspected vhost");
  assert.ok(tls.filter((node)=>node.name === "include").every((node)=>/ssl|tls/i.test(node.args.join(" "))),"Inspect non-TLS server includes manually");
  assert.ok(tls.every((node)=>!node.children),"Nested TLS directives require manual inspection");
  function statement(node) {
    const tail=source.slice(node.end).match(/^[ \t]*(#[^\r\n]*)/);
    return source.slice(node.start,node.end)+(tail?.[0] || "");
  }
  const redirect="return 301 https://learnifyops.com$request_uri;";
  const edits=[];
  const nameNode=main.children.find((node)=>node.name === "server_name");
  edits.push({start:nameNode.start,end:nameNode.end,text:"server_name learnifyops.com;"});
  const www=["", "", "server {", ...listens(main).map((node)=>`    ${statement(node).replace(/\s+default_server\b/g,"")}`), "    server_name www.learnifyops.com;", "", ...tls.map((node)=>`    ${statement(node)}`), "", `    ${redirect}`, "}"] .join("\n");
  edits.push({start:main.end,end:main.end,text:www});
  const http=targets.filter((server)=>server !== main);
  assert.ok(http.length,"Expected existing LearnifyOps HTTP handling; inspect missing listeners manually");
  for(const server of http) {
    assert.ok(listens(server).every((node)=>/(?:^|:)80(?:\s|$)/.test(node.args.join(" "))),"Unexpected listener on a LearnifyOps block");
    const returns=server.children.filter((node)=>node.name === "return");
    const conditions=server.children.filter((node)=>node.name === "if");
    for(const node of conditions) assert.ok(node.args.join(" ").includes("$host") && node.children?.every((child)=>child.name === "return"),"Non-standard HTTP if logic requires manual inspection");
    assert.ok(!server.children.some((node)=>node.name === "rewrite"),"Non-standard HTTP rewrite requires manual inspection");
    for(const node of [...returns,...conditions]) edits.push({start:node.start,end:node.end,text:""});
    edits.push({start:server.openEnd,end:server.openEnd,text:`\n    ${redirect}`});
  }
  let staged=source;
  for(const edit of edits.sort((a,b)=>b.start-a.start)) staged=staged.slice(0,edit.start)+edit.text+staged.slice(edit.end);
  return staged;
}

if(process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [before,staged]=process.argv.slice(2);
  assert.ok(before && staged,"Usage: node scripts/prepare-nginx-www.mjs saved-vhost.before saved-vhost.staged");
  assert.notEqual(resolve(before),resolve(staged),"Input and output must differ");
  writeFileSync(staged,prepareNginx(readFileSync(before,"utf8")),{flag:"wx",mode:0o600});
  console.log(`Prepared ${staged}. Review its exact diff, verify certificate coverage, back up the active file, and run nginx -t before any reload. Nothing was deployed.`);
}
