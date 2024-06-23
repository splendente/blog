// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
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
  ],
  css: ["~/assets/css/reset.css", "~/assets/css/markdown.css"],
  content: {
    highlight: { theme: "github-light" },
    documentDriven: true,
  },
  site: {
    url: "https://splendente.vercel.app",
  },
});
