/** @type { import('@storybook/vue3').Preview } */
import '@/assets/css/reset.css'
import '@/assets/css/main.css'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'cog',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale for components',
    defaultValue: 'ja',
    toolbar: {
      icon: 'globe',
      items: ['ja', 'en'],
      dynamicTitle: true,
    },
  },
}

const themeDecorator = (story, context) => {
  const theme = context.globals.theme || 'light'
  document.documentElement.classList.remove('light-mode', 'dark-mode')
  document.documentElement.classList.add(`${theme}-mode`)
  return story()
}

const localeDecorator = (story, context) => {
  const locale = context.globals.locale || 'ja'
  document.documentElement.lang = locale
  return story()
}

export const decorators = [
  themeDecorator,
  localeDecorator,
]

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
