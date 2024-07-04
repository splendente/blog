import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import AutoImportFunctions from "unplugin-auto-import/vite";
import AutoImportComponents from "unplugin-vue-components/vite";

export default defineVitestConfig({
  plugins: [
    Vue,
    AutoImportFunctions({ imports: "vue", dirs: ["app/composables"] }),
    AutoImportComponents({ dirs: ["app/components"] }),
  ],
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "e2e/**/*.spec.ts"],
  },
  resolve: {
    alias: {
      "@": `${__dirname}/app`,
    },
  },
});
