/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../app/assets', '../public'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {},
}

export default config
