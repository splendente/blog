/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import AutoImportFunctions from "unplugin-auto-import/vite";
import AutoImportComponents from "unplugin-vue-components/vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../app/assets", "../public"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../app"),
      "~": path.resolve(__dirname, "../app"),
    };

    if (config.plugins) {
      config.plugins.push(
        AutoImportFunctions({
          imports: ["vue", "@vueuse/core"],
          dirs: ["app/utils/**", "app/composables/**"],
          dts: "auto-import-functions.d.ts",
        }),
        AutoImportComponents({
          dirs: ["app/components"],
          dts: "components.d.ts",
        }),
        Vue(),
      );
    }

    return config;
  },
};

export default config;
