import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/briscola-magic/',
  title: 'Briscola Magic',
  description: 'Gioca a Magic con un mazzo di carte da briscola',
  sitemap: {
    hostname: 'https://daniele-tentoni.github.io/briscola-magic/',
  },
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://www.lpfc.it/_astro/lpfc.n7hMU2D0_15SpMq.svg',
      },
    ],
  ],
  markdown: {
    config: (md) => {
      md.use(manaSymbolsPlugin);
    },
  },
  themeConfig: {
    editLink: {
      pattern:
        'https://github.com/daniele-tentoni/briscola-magic/edit/main/:path',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/daniele-tentoni/briscola-magic',
      },
      { icon: 'instagram', link: 'https://www.instagram.com/lpfc/' },
    ],
  },
  locales: {
    root: {
      label: 'Italiano',
      lang: 'it',
      title: 'Briscola Magic',
      description: 'Gioca a Magic con un mazzo di carte da briscola',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Contenuti',
            items: [
              { text: 'Regole', link: '/rules' },
              { text: 'Carte', link: '/card-examples' },
            ],
          },
          { text: 'LPFC', link: 'https://www.lpfc.it/' },
        ],
        sidebar: [
          {
            text: 'Introduzione',
            items: [
              { text: 'Benvenuto', link: '/' },
              { text: 'Regole', link: '/rules' },
              { text: 'Carte', link: '/card-examples' },
            ],
          },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Briscola Magic',
      description: 'Play Magic with a Briscola deck',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Contents',
            items: [
              { text: 'Rules', link: '/en/rules' },
              { text: 'Cards', link: '/en/card-examples' },
            ],
          },
          { text: 'LPFC', link: 'https://www.lpfc.it/' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Rules', link: '/en/rules' },
              { text: 'Cards', link: '/en/card-examples' },
            ],
          },
        ],
      },
    },
  },
});

function manaSymbolsPlugin(md) {
  // 🔗 Mappa simboli → URL Scryfall
  // Lista completa qui: https://scryfall.com/docs/api/images#mana-symbols
  const symbols: Record<string, string> = {};

  const base = 'https://svgs.scryfall.io/card-symbols';

  // Colori base
  ['W', 'U', 'B', 'R', 'G', 'C', 'S'].forEach((s) => {
    symbols[s] = `${base}/${s}.svg`;
  });

  // Numeri da 0 a 20 + X + Y + Z + ∞
  [
    ...Array.from({ length: 21 }, (_, i) => i.toString()),
    'X',
    'Y',
    'Z',
    '∞',
  ].forEach((s) => {
    symbols[s] = `${base}/${s}.svg`;
  });

  // Ibridi (color-color e color-incolore)
  const colors = ['W', 'U', 'B', 'R', 'G'];
  for (const c1 of colors) {
    for (const c2 of colors) {
      if (c1 !== c2) {
        symbols[`${c1}/${c2}`] = `${base}/${c1}${c2}.svg`;
      }
    }
    symbols[`2/${c1}`] = `${base}/2${c1}.svg`;
    symbols[`${c1}/P`] = `${base}/${c1}P.svg`; // Phyrexian
  }

  // Alcuni simboli speciali noti
  symbols['P'] = `${base}/P.svg`; // Phyrexian generico
  symbols['T'] = `${base}/T.svg`; // TAP
  symbols['Q'] = `${base}/Q.svg`; // UNTAP
  symbols['CHAOS'] = `${base}/CHAOS.svg`;
  symbols['E'] = `${base}/E.svg`; // Energy

  // Parser
  md.inline.ruler.after('emphasis', 'mana-symbols', (state, silent) => {
    const src = state.src;
    const pos = state.pos;

    if (src.charCodeAt(pos) !== 0x7b /* { */) return false;
    const end = src.indexOf('}', pos);
    if (end === -1) return false;

    const symbol = src.slice(pos + 1, end).toUpperCase();
    if (!symbols[symbol]) return false;

    if (!silent) {
      const token = state.push('html_inline', '', 0);
      token.content = `<img src="${symbols[symbol]}" alt="{${symbol}}" style="height:1em;display:inline-block;vertical-align:middle;" />`;
    }

    state.pos = end + 1;
    return true;
  });
}
