import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';

const files=['index.html','what-to-test-next.html','forge-thesis.html'];
const canonical='https://www.llode.co/';
const strip=html=>html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
let count=0;
for(const file of files){
  const html=fs.readFileSync(file,'utf8');
  const before=execFileSync('git',['show',`aef9148:${file}`],{encoding:'utf8'});
  const expected=canonical+(file==='index.html'?'':file);
  const meta=key=>html.match(new RegExp(`<meta (?:name|property)="${key}" content="([^"]+)"`))?.[1];
  assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1],expected);
  assert.equal(meta('og:url'),expected);
  assert.equal(meta('description'),meta('og:description'));
  assert.equal(meta('description'),meta('twitter:description'));
  const visible=strip(html.slice(html.indexOf('<body')));
  assert.ok(visible.includes(meta('description')),`${file}: description must be visible`);
  assert.doesNotMatch(html,/https:\/\/llode\.co(?:[\/"\s]|$)/);
  assert.equal(html.match(/<h1[\s\S]*?<\/h1>/)?.[0],before.match(/<h1[\s\S]*?<\/h1>/)?.[0],`${file}: H1 retained`);
  assert.deepEqual([...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(m=>m[1]),[...before.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(m=>m[1]),`${file}: no CSS redesign`);
  assert.equal((html.match(/data-cta\b/g)||[]).length,(before.match(/data-cta\b/g)||[]).length);
  const appLinks=text=>[...text.matchAll(/href="(https:\/\/app\.llode\.co[^"]*)"/g)].map(m=>m[1]);
  assert.deepEqual(appLinks(html),appLinks(before),`${file}: app destinations unchanged`);
  for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
    if(match[1].includes('application/ld+json')){
      const data=JSON.parse(match[2]);count++;
      assert.doesNotMatch(JSON.stringify(data),/aggregateRating|reviewCount|lowPrice|highPrice|totalTime|ROAS attribution|expected lift range/);
      for(const item of data['@graph']||[data]){
        if(item.description)assert.ok(visible.includes(item.description),`${file}: structured description must match visible text`);
        if(item.url)assert.equal(item.url,expected);
      }
      for(const q of Array.isArray(data.mainEntity)?data.mainEntity:[])if(q.acceptedAnswer)assert.ok(visible.includes(q.acceptedAnswer.text),`${file}: FAQ answer must be visible`);
    }else if(!match[1].includes('src='))new vm.Script(match[2],{filename:file});
  }
  console.log(`PASS ${file}: canonical, visible/structured description, parsed JSON-LD and JS, unchanged H1/CSS/CTA/app links`);
}
const sitemap=fs.readFileSync('sitemap.xml','utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]),files.map(file=>canonical+(file==='index.html'?'':file)));
assert.doesNotMatch(sitemap,/app\.llode|forgexlab|<lastmod>/);
const robots=fs.readFileSync('robots.txt','utf8');
assert.equal((robots.match(/User-agent:/g)||[]).length,1);
assert.match(robots,/User-agent: \*\s+Allow: \//);
assert.match(robots,/Disallow: \/api\//);
assert.match(robots,/Sitemap: https:\/\/www\.llode\.co\/sitemap.xml/);
const llms=fs.readFileSync('llms.txt','utf8');
for(const action of ['Adopt','Retain','Continue','Rerun'])assert.ok(llms.includes(action));
assert.match(llms,/longer-term direction/);
assert.doesNotMatch(llms,/https:\/\/app\.|forgexlab|\/api\//);
const png=fs.readFileSync('og-image.png');
assert.equal(png.subarray(1,4).toString(),'PNG');
assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);
console.log(`PASS ${count} JSON-LD blocks, public-only sitemap/llms, shared crawler restrictions and existing 1200x630 OG asset. No deployment, indexing or AI-citation guarantee.`);
