import Header from '@/components/header.vue'

export default {
  title: 'components/header',
  component: Header,
  tags: ['autodocs'],
  render: () => ({
    components: { Header },
    setup() {
      const colorMode = {
        value: 'light',
        preference: 'light',
        unknown: false,
        forced: false,
      }
      const app = getCurrentInstance()?.appContext.app
      if (app) {
        app.config.globalProperties.$colorMode = colorMode
      }
      return {}
    },
    template: `
      <Header />
    `,
  }),
}

export const Default = {}
