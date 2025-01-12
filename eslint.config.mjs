import vitest from '@vitest/eslint-plugin'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    vitest,
    'vuejs-accessibility': pluginVueA11y,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    ...vitest.configs.recommended.rules,
    'vitest/max-nested-describe': ['error', { max: 3 }],
  },
})
