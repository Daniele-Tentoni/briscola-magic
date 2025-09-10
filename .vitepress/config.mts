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
              { text: 'Rules', link: '/rules' },
              { text: 'Cards', link: '/card-examples' },
            ],
          },
          { text: 'LPFC', link: 'https://www.lpfc.it/' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Welcome', link: '/en/' },
              { text: 'Rules', link: '/rules' },
              { text: 'Cards', link: '/card-examples' },
            ],
          },
        ],
      },
    },
  },
});
