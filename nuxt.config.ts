// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
    'nuxt-feedme',
    '@nuxt/eslint',
    'nuxt-og-image',
    'nuxt-gtag',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@nuxtjs/storybook',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
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
})
