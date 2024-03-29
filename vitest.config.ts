import { defineVitestConfig } from "@nuxt/test-utils/config";
import Vue from "@vitejs/plugin-vue";
import AutoImportFunctions from "unplugin-auto-import/vite";
import AutoImportComponents from "unplugin-vue-components/vite";

export default defineVitestConfig({
  plugins: [
    Vue(),
    AutoImportFunctions({ imports: "vue" }),
    AutoImportComponents({ dirs: ["components"] }),
  ],
  test: {
    environment: "happy-dom",
  },
});
