import { describe, expect, test } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Tag from '~/components/tag/index.vue'
import type { NavigationMenu } from '@/types'

describe('Tagコンポーネント', () => {
  describe('テキストとして表示する場合', () => {
    const props: NavigationMenu = {
      element: 'p',
      text: 'vitest',
    }

    const tag = shallowMount(Tag, {
      propsData: {
        element: props.element,
        text: props.text,
      },
    })

    test('テキストとして表示されている', () => {
      expect(tag.find('p').exists()).toBe(true)
    })

    test('「# vitest」と表示されている', () => {
      expect(tag.find('p').exists()).toBe(true)
      expect(tag.find('p').text()).toBe('# ' + props.text)
    })
  })

  describe('リンクとして表示する場合', () => {
    const props: NavigationMenu = {
      element: 'nuxt-link',
      text: 'vitest',
      to: '#',
    }

    const tag = shallowMount(Tag, {
      propsData: {
        element: props.element,
        text: props.text,
        to: props.to,
      },
      global: {
        stubs: {
          NuxtLinkLocale: RouterLinkStub,
        },
      },
    })

    test('リンクとして表示されている', () => {
      expect(tag.findComponent(RouterLinkStub).exists()).toBe(true)
    })

    test(`遷移先が${props.to}である`, () => {
      expect(tag.findComponent(RouterLinkStub).props().to).toBe(props.to)
    })

    test('「# vitest」と表示されている', () => {
      expect(tag.findComponent(RouterLinkStub).exists()).toBe(true)
      expect(tag.findComponent(RouterLinkStub).text()).toBe('# ' + props.text)
    })
  })
})
