import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Tooltip from '@/components/tooltip/index.vue'

describe('Tooltipコンポーネント', () => {
  const props = {
    text: 'tooltip',
    top: 0,
    left: 0,
  }

  const tooltip = shallowMount(Tooltip, {
    propsData: {
      ...props,
    },
  })

  test('「tooltip」と表示されている', () => {
    expect(tooltip.find('p').exists()).toBe(true)
    expect(tooltip.find('p').text()).toBe(props.text)
  })

  test(`上から${props.top}、左から${props.left}の位置に表示されている`, () => {
    expect(tooltip.find('div').attributes('style')).toBe(
      `top: ${props.top}px; left: ${props.left}px;`,
    )
  })
})
