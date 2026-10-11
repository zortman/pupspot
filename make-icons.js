const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'assets');
fs.mkdirSync(dir, { recursive: true });

// --- golden pup, drawn in a 0..100 coordinate space ---
const pup = (id) => `
  <defs>
    <radialGradient id="${id}b" cx="40%" cy="28%" r="85%"><stop offset="0%" stop-color="#f4c472"/><stop offset="100%" stop-color="#eab464"/></radialGradient>
    <radialGradient id="${id}h" cx="42%" cy="30%" r="80%"><stop offset="0%" stop-color="#f7cb80"/><stop offset="100%" stop-color="#eab464"/></radialGradient>
  </defs>
  <path d="M72 70 q20 2 18 -14 q-2 -9 -10 -7 q8 7 2 15 q-4 6 -11 4 z" fill="#d79a4a"/>
  <path d="M50 50 c-17 0 -28 13 -28 29 c0 8 5 13 12 13 h32 c7 0 12 -5 12 -13 c0 -16 -11 -29 -28 -29 z" fill="url(#${id}b)"/>
  <ellipse cx="50" cy="84" rx="12" ry="10" fill="#fff6e9"/>
  <ellipse cx="40" cy="92" rx="7.5" ry="5" fill="#fff6e9"/><ellipse cx="60" cy="92" rx="7.5" ry="5" fill="#fff6e9"/>
  <ellipse cx="25" cy="45" rx="9.5" ry="16" fill="#d79a4a" transform="rotate(28 25 45)"/>
  <ellipse cx="75" cy="45" rx="9.5" ry="16" fill="#d79a4a" transform="rotate(-28 75 45)"/>
  <circle cx="50" cy="38" r="22" fill="url(#${id}h)"/>
  <ellipse cx="50" cy="47" rx="12.5" ry="10" fill="#fff6e9"/>
  <path d="M37 37 q4.5 -5.5 9 0" stroke="#2a1d16" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path d="M54 37 q4.5 -5.5 9 0" stroke="#2a1d16" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <ellipse cx="50" cy="42" rx="4.6" ry="3.5" fill="#4a3326"/>
  <path d="M50 45.5 v4 M50 49.5 q-5 3.5 -9 1 M50 49.5 q5 3.5 9 1" stroke="#6b4a34" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M46 50 q4 7 8 0 z" fill="#ff8fa3"/>
`;

const bg = (s) => `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd98a"/><stop offset="1" stop-color="#f6a63f"/></linearGradient>
    <radialGradient id="hl" cx="0.5" cy="0.36" r="0.62"><stop offset="0" stop-color="#fff3d2" stop-opacity="0.9"/><stop offset="1" stop-color="#fff3d2" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${s}" height="${s}" fill="url(#g)"/>
  <rect width="${s}" height="${s}" fill="url(#hl)"/>
`;

// icon-background.png (1024 solid gradient)
const svgBg = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">${bg(1024)}</svg>`;
// icon-foreground.png (pup centered, transparent, within adaptive safe zone)
const svgFg = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"><g transform="translate(210,196) scale(6.0)">${pup('f')}</g></svg>`;
// icon-only.png (pup on gradient, for legacy/round)
const svgFull = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">${bg(1024)}<g transform="translate(232,212) scale(5.4)">${pup('o')}</g></svg>`;
// splash (2732 gradient + centered pup)
const svgSplash = `<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732">${bg(2732)}<g transform="translate(1046,1000) scale(6.4)">${pup('s')}</g></svg>`;
const svgSplashDark = `<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732"><rect width="2732" height="2732" fill="#231a12"/><g transform="translate(1046,1000) scale(6.4)">${pup('sd')}</g></svg>`;

async function render(svg, name) {
  await sharp(Buffer.from(svg)).png().toFile(path.join(dir, name));
  console.log('wrote', name);
}
(async () => {
  await render(svgBg, 'icon-background.png');
  await render(svgFg, 'icon-foreground.png');
  await render(svgFull, 'icon-only.png');
  await render(svgSplash, 'splash.png');
  await render(svgSplashDark, 'splash-dark.png');
  console.log('done');
})();
