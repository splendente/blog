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
