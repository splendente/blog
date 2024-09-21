import { userEvent, within } from '@storybook/test'
import TagMenu from '@/components/tag-menu.vue'

export default {
  title: 'components/tag-menu',
  component: TagMenu,
  tags: ['autodocs'],
}

const tags = ['Vue.js', 'React', 'Angular', 'Svelte']

export const Default = {
  args: {
    tags: tags,
  },
}

export const WithSelected = {
  args: {
    tags: tags,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const selectButton = canvas.getByRole('button', { name: 'タグで絞り込む' })

    userEvent.click(selectButton)
  },
}
