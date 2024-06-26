// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxt/test-utils/module",
    "@nuxtjs/sitemap",
    "nuxt-feedme",
    "@nuxt/eslint",
    "nuxt-og-image",
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxtjs/robots",
  ],
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  css: ["~/assets/css/reset.css", "~/assets/css/markdown.css"],
  content: {
    highlight: { theme: "github-light" },
  },
  site: {
    url: "https://splendente.vercel.app",
  },
});
