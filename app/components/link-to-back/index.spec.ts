import { describe, expect, test, vi, beforeEach } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import LinkToBack from '@/components/link-to-back/index.vue'

describe('LinkToBackコンポーネント', () => {
  const mockTranslations: { [key: string]: string } = {
    linkToBack: '一覧に戻る',
  }

  beforeEach(() => {
    vi.stubGlobal('$t', (key: string) => mockTranslations[key] || key)
  })

  const linkToBack = shallowMount(LinkToBack, {
    global: {
      stubs: {
        NuxtLinkLocale: RouterLinkStub,
      },
      config: {
        globalProperties: {
          $t: (key: string) => mockTranslations[key] || key,
        },
      },
    },
  })

  test('「一覧に戻る」というリンクが表示されている', () => {
    expect(linkToBack.findComponent(RouterLinkStub).exists()).toBe(true)
    expect(linkToBack.findComponent(RouterLinkStub).text()).toBe('一覧に戻る')
  })
})
