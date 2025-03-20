import type { GlobalTypes } from 'storybook/internal/types'
import Header from '~/components/header/index.vue'

export default {
  title: 'components/header',
  component: Header,
  tags: ['autodocs'],
  render: (args: undefined, { globals }: { globals: GlobalTypes }) => ({
    components: { Header },
    setup() {
      const colorMode = {
        value: 'light',
        preference: 'light',
        unknown: false,
        forced: false,
      }
      const i18n: Partial<ReturnType<typeof useI18n>> = {
        locale: globals.locale as WritableComputedRef<'ja' | 'en'> || 'ja',
        t: (key: string) => {
          return key
        },
      }
      const app = getCurrentInstance()?.appContext.app
      if (app) {
        app.config.globalProperties.$colorMode = colorMode
        app.config.globalProperties.$i18n = i18n
      }

      return {}
    },
    template: `
      <Header />
    `,
  }),
}

export const Default = {}
