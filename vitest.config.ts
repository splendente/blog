import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImportFunctions from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'

export default defineVitestConfig({
  plugins: [
    Vue,
    AutoImportFunctions({
      imports: 'vue',
      dirs: ['app/composables', 'app/utils'],
      dts: './../auto-import-functions.d.ts',
    }),
    AutoImportComponents({
      dirs: ['app/components'],
      dts: './../components.d.ts',
    }),
  ],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/**/*.spec.ts'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      exclude: ['app/**/*.stories.ts', 'e2e/**/*.spec.ts'],
    },
  },
  resolve: {
    alias: {
      '@': `${__dirname}/app`,
    },
  },
})
