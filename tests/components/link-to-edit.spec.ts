import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LinkToEdit from '@/components/link-to-edit.vue'

describe('LinkToEditコンポーネント', () => {
  const baseUrl = 'https://github.com/splendente/blog/tree/main/content/'
  const props = {
    fileName: 'vitest',
  }

  const linkToEdit = shallowMount(LinkToEdit, {
    propsData: {
      ...props,
    },
  })

  test('「GitHubで編集を提案する」というリンクが表示されている', () => {
    expect(linkToEdit.find('a').exists()).toBe(true)
    expect(linkToEdit.find('a').text()).toBe('GitHubで編集を提案する')
  })

  test(`遷移先が${baseUrl + props.fileName}である`, () => {
    expect(linkToEdit.attributes('href')).toBe(baseUrl + props.fileName)
  })

  test('外部リンクである', () => {
    expect(linkToEdit.attributes('target')).toBe('_blank')
  })
})
