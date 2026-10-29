import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { snapshot, tags } from "./seo-html.mjs";
import { pageDescriptions } from "../src/data/seoMetadata.js";
import { sourceHash } from "./audit-source.mjs";

const before=JSON.parse(readFileSync(new URL("./fixtures/seo-preservation.json",import.meta.url),"utf8"));
const allowedSourceChanges=new Set(["src/data/seoMetadata.js","src/views/HomePage.jsx","src/styles.css"]);
for(const [path,hash] of Object.entries(before.sourceHashes)) {
  if(allowedSourceChanges.has(path)) continue;
  assert.equal(sourceHash(path,readFileSync(path)),hash,`Protected application, backend, configuration or asset file changed: ${path}`);
}
for(const [route,page] of Object.entries(before.pages)) {
  const original={...before.shared,...page};
  const html=readFileSync(`.next/server/app/${route === "/" ? "index" : route.slice(1)}.html`,"utf8");
  let comparisonHtml=html;
  if(route === "/") {
    // Reverse only the explicitly reviewed semantic substitutions for the
    // original HTML comparison. Every visible word and other attribute remains guarded.
    let supportCount=0,labelCount=0;
    comparisonHtml=comparisonHtml.replace(/<p class="(font-serif![^"]*max-w-2xl!) mb-3!">([\s\S]*?)<\/p>/g,(_,classes,text)=>{supportCount++;return `<h3 class="${classes}">${text}</h3>`;});
    comparisonHtml=comparisonHtml.replace(/<span aria-hidden="true" class="editorial-story-label ([^"]+)">([\s\S]*?)<\/span>/g,(_,classes,text)=>{labelCount++;return `<h3 class="${classes}">${text}</h3>`;});
    assert.equal(supportCount,1,"Expected exactly one semantic hero subtitle change");
    assert.equal(labelCount,3,"Expected exactly three alternate carousel labels");
    const headings=[...html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,"").matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map(([,level,text])=>({level:Number(level),text:text.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}));
    assert.equal(headings.filter((heading)=>heading.level===1).length,1);
    assert.equal(headings.length,24);
    assert.equal(new Set(headings.map((heading)=>heading.text)).size,headings.length);
    assert.ok(headings.every((heading,index)=>index===0 || heading.level<=headings[index-1].level+1),"Unexpected heading-level jump");
  }
  const actual=snapshot(comparisonHtml);
  for(const field of ["title","h1s","bodySha256","preservedMetadata","preservedLinks","jsonLd"]) assert.deepEqual(actual[field],original[field],`Unexpected ${field} change: ${route}`);
  const description=tags(html,"meta").filter((tag)=>tag.name==="description");
  assert.equal(description.length,1);
  assert.equal(description[0].content,pageDescriptions[route]);
  if(route!=="/") assert.deepEqual(description,original.descriptions,`Other page description changed: ${route}`);
}
assert.equal(pageDescriptions["/"],"Compare international DBA programmes, eligibility and university pathways with LearnifyOps. Get personalised admissions guidance for your next step.");
assert.ok(pageDescriptions["/"].length<before.pages["/"].descriptions[0].content.length);
console.log("PASS: all 15 pages preserve original visible wording and protected markup; exactly four reviewed homepage semantic substitutions; 24 unique homepage headings; one H1; no skipped levels; only homepage description changed; protected source/assets/backend/configuration unchanged.");
