/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import AutoImportFunctions from "unplugin-auto-import/vite";
import AutoImportComponents from "unplugin-vue-components/vite";
import path from "path";
import { mergeConfig } from "vite";
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
  staticDirs: ["../assets", "../public"],
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
      "@": path.resolve(__dirname, "../"),
    };

    if (config.plugins) {
      config.plugins.push(
        AutoImportFunctions({
          imports: ["vue"],
          dirs: ["utils/**"],
          dts: "../auto-import-functions.d.ts",
        }),
        AutoImportComponents({ dirs: ["components"] }),
      );
    }

    return mergeConfig(config, {
      plugins: [Vue()],
    });
  },
};

export default config;
