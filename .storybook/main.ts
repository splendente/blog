/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  staticDirs: ['../app/assets', '../public'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {},
}

export default config
