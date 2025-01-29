import ja from './../../i18n/locales/ja'
import en from './../../i18n/locales/en'

import LinkToBack from '@/components/link-to-back.vue'

const messages: { ja: Record<string, string>, en: Record<string, string> } = {
  ja: ja,
  en: en,
}

export default {
  title: 'components/link-to-back',
  component: LinkToBack,
  tags: ['autodocs'],
  render: (args, { globals }) => ({
    components: { LinkToBack },
    setup() {
      const locale = globals.locale || 'ja'
      const app = getCurrentInstance()?.appContext.app
      if (app) {
        app.config.globalProperties.$t = (key: string) => locale === 'ja' ? messages.ja[key] || key : messages.en[key] || key
      }
      return { }
    },
    template: `
      <LinkToBack />
    `,
  }),
}

export const Default = {}
