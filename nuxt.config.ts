// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/content"],
  experimental: {
    componentIslands: true,
  },
  css: ["~/assets/css/reset.css", "~/assets/css/markdown.css"],
  content: {
    highlight: { theme: "github-light" },
  },
});
