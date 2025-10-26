import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from 'vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    exclude: [...configDefaults.exclude, 'e2e/**/*.spec.ts'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      exclude: ['app/**/*.stories.ts', 'e2e/**/*.spec.ts'],
      // thresholds: {
      //   statements: 80,
      // },
    },
  },
  resolve: {
    alias: {
      '@': `${__dirname}/app`,
    },
  },
})
