// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    'nuxt-og-image',
    'nuxt-gtag',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/storybook',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  ssr: true,

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
    },
  },

  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.css',
    '~/assets/css/markdown.css',
    '~/assets/css/remark-link-card.css',
  ],

  site: {
    url: 'https://splendente.vercel.app',
  },

  content: {
    highlight: { theme: 'github-light' },
    markdown: {
      remarkPlugins: {
        'remark-link-card': {},
      },
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      },
    },
    experimental: {
      search: true,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-09-09',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  i18n: {
    locales: [
      { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.ts' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.ts' },
    ],
    defaultLocale: 'ja',
    langDir: 'locales/',
    lazy: true,
  },
})
