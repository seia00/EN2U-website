/**
 * Render the EN2U mark to PNG for social / print use.
 *
 * Run:  node brand/render-mark.mjs
 * Needs: npm i --no-save @resvg/resvg-js   (build-time only, never shipped)
 *
 * Instagram crops avatars to a CIRCLE, so the mark is scaled to sit inside the
 * inscribed circle with margin rather than filling the square edge to edge.
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const OUT = 'brand/export';
mkdirSync(OUT, { recursive: true });

const C = {
  '--brand-ocean': '#2E7BC0', '--brand-land': '#48A848',
  '--brand-hand': '#EFC79B', '--brand-line': '#16233A',
  '--rb-1': '#6639AE', '--rb-2': '#B43B9A', '--rb-3': '#D3634F',
  '--rb-4': '#E49B3D', '--rb-5': '#F5CA47', '--rb-6': '#7FB350',
  '--rb-7': '#35908F', '--rb-8': '#2C69AC', '--rb-9': '#3F2D99',
};
const CHALK = '#ECEBE4';
const INK = '#16233A';

/* Pull the full-detail mark straight out of the built site, so the exported
   file can never drift from what the site actually renders. */
let inner = readFileSync('dist/mark-preview/index.html', 'utf8')
  .match(/<svg class="en2u-mark[^>]*>([\s\S]*?)<\/svg>/)[1];
for (const [k, v] of Object.entries(C)) inner = inner.replaceAll(`var(${k})`, v);
if (inner.includes('var(')) throw new Error('unresolved CSS variable in mark');

/** size = px, scale = fraction of the canvas the 64-unit mark occupies */
function compose({ size, scale, bg }) {
  const s = size * scale;
  const o = (size - s) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
${bg ? `<rect width="${size}" height="${size}" fill="${bg}"/>` : ''}
<g transform="translate(${o} ${o}) scale(${s / 64})">${inner}</g>
</svg>`;
}

function png(svg, size) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
}

const jobs = [
  // Instagram avatar: 1080 square, mark at 78% so the ring clears the circular crop.
  ['en2u-instagram-profile.png',      { size: 1080, scale: 0.78, bg: CHALK }],
  ['en2u-instagram-profile-ink.png',  { size: 1080, scale: 0.78, bg: INK }],
  // Transparent, edge-to-edge — for decks, overlays, print.
  ['en2u-mark-1024-transparent.png',  { size: 1024, scale: 0.94, bg: null }],
  ['en2u-mark-512-chalk.png',         { size: 512,  scale: 0.94, bg: CHALK }],
];

for (const [name, opts] of jobs) {
  const buf = png(compose(opts), opts.size);
  writeFileSync(`${OUT}/${name}`, buf);
  console.log(`${name.padEnd(34)} ${opts.size}x${opts.size}  ${(buf.length / 1024).toFixed(0)} KB`);
}

/* Proof sheet: how the avatar actually looks once Instagram masks it to a circle. */
const size = 1080, r = size / 2;
const masked = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
<defs><clipPath id="c"><circle cx="${r}" cy="${r}" r="${r}"/></clipPath></defs>
<rect width="${size}" height="${size}" fill="#ffffff"/>
<g clip-path="url(#c)">
  <rect width="${size}" height="${size}" fill="${CHALK}"/>
  <g transform="translate(${size * 0.11} ${size * 0.11}) scale(${(size * 0.78) / 64})">${inner}</g>
</g>
</svg>`;
writeFileSync(`${OUT}/en2u-instagram-circle-preview.png`, png(masked, 1080));
console.log('en2u-instagram-circle-preview.png   1080x1080  (circular crop preview)');
