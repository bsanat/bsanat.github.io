const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { projects, certificates, technologyIcons } = require('./app.js');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const url = match[1];
  if (/^(?:https?:|mailto:|tel:)/.test(url)) continue;
  if (url.startsWith('#')) {
    assert(html.includes(`id="${url.slice(1)}"`), `Missing section: ${url}`);
  } else {
    assert(fs.existsSync(path.join(__dirname, url.split('#')[0])), `Missing asset: ${url}`);
  }
}
const triggers = [...html.matchAll(/data-project="([^"]+)"/g)].map(match => match[1]);
assert.deepEqual(triggers.sort(), Object.keys(projects).sort(), 'Every project must open its own details');
assert.deepEqual(Object.keys(projects).sort(), ['jobhub', 'medpredict', 'mura']);
assert(!/Avicenna|Zaman AI|assets\/images\/sanat\.png/.test(html), 'Removed projects and portrait must not remain on the page');
const certificateTriggers = [...html.matchAll(/data-certificate="([^"]+)"/g)].map(match => match[1]);
assert.deepEqual(certificateTriggers.sort(), Object.keys(certificates).sort(), 'Every certificate must open its own original');
for (const certificate of Object.values(certificates)) {
  for (const asset of [certificate.image, certificate.original]) assert(fs.existsSync(path.join(__dirname, asset)), `Missing certificate: ${asset}`);
}
assert.equal(projects.mura.links[0].url, 'https://bogenbayevsanat.me/KitapSoresi');
assert.equal(new URL(projects.medpredict.links[0].url).pathname, '/design/zOkk0fppNrBrjWDblCDwyF/Untitled');
assert.equal(projects.jobhub.links[0].url, 'https://jobhub-lovat.vercel.app/');
assert.equal(new URL(projects.jobhub.links.find(link => link.label === 'Макет в Figma').url).pathname, '/design/aCXI2bPMUi8CpeHZF8oBh9/Untitled');
assert(html.includes('<html lang="ru">'));
for (const project of Object.values(projects)) {
  assert(project.title && project.description && project.facts.length);
  for (const link of project.links) assert.equal(new URL(link.url).protocol, 'https:');
  for (const tag of project.tags) assert(technologyIcons[tag], `Missing technology logo: ${tag}`);
}
for (const [, spritePath, symbol] of html.matchAll(/<use href="([^"#]+)#([^\"]+)"/g)) {
  const sprite = fs.readFileSync(path.join(__dirname, spritePath), 'utf8');
  assert(sprite.includes(`id="${symbol}"`), `Missing SVG symbol: ${symbol}`);
}
for (const url of ['https://t.me/jrdsta', 'https://www.instagram.com/bogenbaejr/']) assert(html.includes(url));
assert(html.includes('assets/images/jobhub-home.jpg') && html.includes('assets/images/developer-hero.png'));
assert(css.includes('prefers-reduced-motion:reduce'));
for (const match of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) {
  assert(fs.existsSync(path.join(__dirname, match[1])), `Missing CSS asset: ${match[1]}`);
}
assert(!/[\p{Emoji_Presentation}\uFE0F]/u.test(html), 'Use SVG icons instead of emoji');
assert(html.includes('id="project-dialog"') && html.includes('id="navigation-dialog"'));
console.log('Portfolio checks passed: 3 projects, real JobHub screen, SVG logos, contact links, certificates and local assets.');
