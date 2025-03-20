import { describe, expect, test } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavigationMenu from '~/components/navigation-menu/index.vue'

describe('NavigationMenuコンポーネント', () => {
  const props = {
    visible: true,
  }
  const internalLinks = getInternalLinks()
  const externalLinks = getExternalLinks()

  const navigationMenu = shallowMount(NavigationMenu, {
    propsData: {
      ...props,
    },
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  })

  test('内部リンク情報と表示されているテキストおよび遷移先が一致する', () => {
    expect(() => {
      navigationMenu.findAll('.internal-link').forEach((item) => {
        return internalLinks.every((link) => {
          return (
            link.name === item.text() && link.href === item.attributes('href')
          )
        })
      })
    }).toBeTruthy()
  })

  test('外部リンク情報と表示されているテキストおよび遷移先が一致する', () => {
    expect(() => {
      navigationMenu.findAll('.external-link').forEach((item) => {
        return externalLinks.every((link) => {
          return (
            link.name === item.text() && link.href === item.attributes('href')
          )
        })
      })
    }).toBeTruthy()
  })
})
