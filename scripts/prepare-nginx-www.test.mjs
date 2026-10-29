import test from "node:test";
import assert from "node:assert/strict";
import { prepareNginx } from "./prepare-nginx-www.mjs";

const sample=`# Sample fixture, not the production vhost.
server {
    server_name learnifyops.com www.learnifyops.com;
    location / { proxy_pass http://127.0.0.1:5174; proxy_set_header Host $host; }
    location /api { proxy_pass http://localhost:5001; }
    listen 443 ssl; # managed by Certbot
    listen [::]:443 ssl;
    ssl_certificate /existing/lineage/fullchain.pem; # managed by Certbot
    ssl_certificate_key /existing/lineage/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
server {
    if ($host = www.learnifyops.com) { return 301 https://$host$request_uri; }
    if ($host = learnifyops.com) { return 301 https://$host$request_uri; }
    listen 80;
    listen [::]:80;
    server_name learnifyops.com www.learnifyops.com;
    return 404; # managed by Certbot
}
`;
test("splits a combined host, preserves proxies and TLS, and makes HTTP a single hop",()=>{
  const staged=prepareNginx(sample);
  assert.ok(staged.includes("server_name learnifyops.com;"));
  assert.ok(staged.includes("server_name www.learnifyops.com;"));
  assert.equal([...staged.matchAll(/return 301 https:\/\/learnifyops.com\$request_uri;/g)].length,2);
  assert.equal([...staged.matchAll(/ssl_certificate \/existing\/lineage\/fullchain.pem; # managed by Certbot/g)].length,2);
  assert.ok(staged.includes("location / { proxy_pass http://127.0.0.1:5174; proxy_set_header Host $host; }"));
  assert.ok(staged.includes("location /api { proxy_pass http://localhost:5001; }"));
  assert.ok(!staged.includes("https://$host"));
});
test("leaves unrelated domain blocks byte-for-byte unchanged",()=>{
  const unrelated="\nserver { listen 443 ssl; server_name britinstitute.uk; location / { proxy_pass http://localhost:9999; } }\n";
  assert.ok(prepareNginx(sample+unrelated).endsWith(unrelated));
});
test("refuses a server block sharing unrelated names",()=>assert.throws(()=>prepareNginx(sample.replace("server_name learnifyops.com www.learnifyops.com;","server_name learnifyops.com www.learnifyops.com britinstitute.uk;")),/shared/));
test("refuses separate www HTTPS blocks rather than creating a conflict",()=>assert.throws(()=>prepareNginx(sample+"\nserver { listen 443 ssl; server_name www.learnifyops.com; }"),/combined/));
test("refuses unexpected proxy ports or missing certificate directives",()=>{
  assert.throws(()=>prepareNginx(sample.replace(":5174",":8080")),/5174/);
  assert.throws(()=>prepareNginx(sample.replace("ssl_certificate /existing/lineage/fullchain.pem;","")),/Certificate/);
});
