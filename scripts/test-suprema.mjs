import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { copyRecommendation, getShareLinks } from '../src/utils/sharing.ts';
const url = 'https://www.xiaomishopcell.com/celular/realme-note-60x';
const text = `Recomendo conhecer a SUNCELL: Celular & acessórios\n${url}`;
const links = getShareLinks(text, url, 'https://www.xiaomishopcell.com/og-suncell.jpg');
assert.equal(links.length, 6);
assert.equal(new Set(links.map(x => x.name)).size, 6);
for (const link of links) assert.equal(new URL(link.url).protocol, 'https:');
assert.equal(new URL(links[0].url).searchParams.get('text'), text);
assert.equal(new URL(links[1].url).searchParams.get('u'), url);
assert.equal(new URL(links[2].url).searchParams.get('text'), text);
assert.equal(new URL(links[3].url).searchParams.get('media'), 'https://www.xiaomishopcell.com/og-suncell.jpg');
assert.equal(new URL(links[4].url).searchParams.get('url'), url);
assert.equal(new URL(links[5].url).searchParams.get('text'), text);
let copied;
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText: async value => { copied = value; } } } });
assert.equal(await copyRecommendation(text), true);
assert.equal(copied, text);
let removed = false; let restored = false;
const textarea = {value: '', style: {}, setAttribute() {}, focus() {}, select() {}, remove() { removed = true; }};
globalThis.document = { activeElement: { focus() { restored = true; } }, createElement() { return textarea; }, querySelector() { return { appendChild() {} }; }, execCommand() { return false; } };
globalThis.navigator.clipboard.writeText = async () => { throw new Error('denied'); };
assert.equal(await copyRecommendation(text), false);
assert.equal(removed, true); assert.equal(restored, true);
globalThis.document.execCommand = () => true;
assert.equal(await copyRecommendation(text), true);
globalThis.document.execCommand = () => { throw new Error('denied'); };
assert.equal(await copyRecommendation(text), false);
for (const path of ['src/data.ts', 'src/realmeData.ts', 'src/bairrosData.ts', 'src/intentData.ts', 'public/sitemap.xml', 'public/robots.txt', 'src/context/CartContext.tsx']) {
  assert.equal(readFileSync(path, 'utf8'), execFileSync('git', ['show', `e94359c:${path}`], { encoding: 'utf8' }), `preserve ${path}`);
}
const floating = readFileSync('src/components/FloatingActions.tsx','utf8');
assert.ok(!/24h|Online agora|melhor |5 estrelas/.test(floating));
assert.ok(floating.includes('window.scrollY > 300'));
assert.ok(floating.includes('prefers-reduced-motion'));
const original = execFileSync('git',['show','e94359c:public/sitemap.xml'],{encoding:'utf8'});
const urls = [...original.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
for (const url of urls) {
  const file = `dist${new URL(url).pathname.replace(/\/$/, '')}/index.html`;
  const html = readFileSync(file, 'utf8');
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, file);
  assert.ok(!html.includes('noindex'), file);
  assert.ok(html.includes(`href="${url}"`), file);
}
console.log(`PASS: six networks, correct link encoding, four clipboard outcomes, preserved catalog/contact/cart/SEO data, ${urls.length} indexable URLs.`);

const home = readFileSync('src/components/Home.tsx', 'utf8');
const hero = readFileSync('src/components/Hero.tsx', 'utf8');
const nav = readFileSync('src/components/Navbar.tsx', 'utf8');
const cart = readFileSync('src/components/Cart.tsx', 'utf8');
assert.ok(home.includes('REALME_PRODUCTS.filter') && home.includes('STORES.map'));
assert.ok(hero.includes('aria-pressed={selected === index}'));
assert.ok(nav.includes('submitSearch') && nav.includes('/celulares?q='));
assert.ok(cart.includes('aria-modal="true"') && cart.includes("event.key === 'Escape'"));
assert.ok(!readFileSync('src/components/ScrollToTop.tsx','utf8').includes('[pathname, search, hash]'));
console.log('PASS: premium hero selectors, real data-driven showcases, search routing, cart keyboard handling and stable query-filter scroll.');
