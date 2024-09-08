import vitest from '@vitest/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    vitest,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    ...vitest.configs.recommended.rules,
    'vitest/max-nested-describe': ['error', { max: 3 }],
  },
})
