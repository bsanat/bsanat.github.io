const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (/^(https?:|mailto:)/.test(url)) continue;
  if (url.startsWith('#')) {
    assert(html.includes(`id="${url.slice(1)}"`), `Missing section: ${url}`);
  } else {
    assert(fs.existsSync(path.join(__dirname, url)), `Missing asset: ${url}`);
  }
}

assert.match(html, /<title>Sanat Bogenbayev — Full Stack Developer<\/title>/);
assert.deepEqual(
  [...html.matchAll(/<a class="project-image" href="[^"]+" aria-label="Open ([^"]+)"/g)].map(match => match[1]),
  ['JobHub', 'Kitapsoresi'],
);
assert.match(html, /href="assets\/documents\/Sanat-Bogenbayev-CV\.pdf"/);
assert.match(html, /href="assets\/favicon\.svg"/);
assert.equal(fs.readFileSync(path.join(__dirname, 'CNAME'), 'utf8').trim(), 'bogenbayevsanat.me');
