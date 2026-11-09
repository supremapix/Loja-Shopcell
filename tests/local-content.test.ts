import assert from 'node:assert/strict';
import fs from 'node:fs';
import { bairrosData } from '../src/bairrosData';
import { localFaq, localSchemas, LOCAL_SITE, localPath, isCity } from '../src/localGuideData';
const titles = new Set<string>();
assert.equal(bairrosData.length, 77);
assert.equal(bairrosData.filter(isCity).length, 11);
for (const local of bairrosData) {
  const html = fs.readFileSync(`dist${localPath(local)}/index.html`, 'utf8');
  const expected = `${LOCAL_SITE}${localPath(local)}`;
  assert.ok(html.includes('<main class="sc-local-guide"'), `${local.slug}: body is server-rendered`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${local.slug}: one H1`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${local.slug}: one canonical`);
  assert.ok(html.includes(`href="${expected}"`), `${local.slug}: first-party canonical`);
  assert.ok(!html.includes('celularescuritibashopcell.com.br'), `${local.slug}: no copied-domain canonical`);
  assert.ok(!html.includes('aggregateRating'), `${local.slug}: no invented aggregate rating`);
  assert.ok(html.includes('5541999176640') && html.includes('5541997501961'), `${local.slug}: both unit contacts`);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  assert.equal(schemas.length, 4);
  assert.equal(schemas.find(schema => schema['@type'] === 'FAQPage').mainEntity.length, 6);
  assert.equal(localSchemas(local)[0].about['@type'], isCity(local) ? 'City' : 'Place');
  for (const faq of localFaq(local)) assert.ok(html.includes(faq.question), `${local.slug}: FAQ must also be visible`);
  assert.ok(html.split(/\s+/).length > 500, `${local.slug}: substantial visible content`);
  assert.ok(!titles.has(local.tituloSEO)); titles.add(local.tituloSEO);
  for(const href of [...html.matchAll(/href="(\/[^"#?]*)/g)].map(match=>match[1])) {
    if(href.startsWith('/assets/') || fs.existsSync(`dist${href}`) && fs.statSync(`dist${href}`).isFile()) continue;
    assert.ok(fs.existsSync(`dist${href === '/' ? '' : href}/index.html`), `${local.slug}: internal destination ${href}`);
  }
}
const sitemap = fs.readFileSync('dist/sitemap-local.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length, 77);
assert.ok(fs.readFileSync('dist/robots.txt','utf8').includes(`${LOCAL_SITE}/sitemap-local.xml`));
for(const local of bairrosData) {
  assert.ok(sitemap.includes(`${LOCAL_SITE}${localPath(local)}`));
  assert.ok(fs.readFileSync('dist/llms-full.txt','utf8').includes(`## ${local.nome}\n`));
}
console.log('PASS: 77 location pages (66 neighborhoods, 11 cities), canonical, static body, FAQ parity, contacts, internal links, sitemap and LLM context.');
