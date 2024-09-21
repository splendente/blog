import ShareButton from '@/components/share-button.vue'

export default {
  title: 'components/share-button',
  component: ShareButton,
  tags: ['autodocs'],
}

const props = {
  title: 'はじめてのNuxt 3',
  text: 'Nuxt 3の紹介記事が公開されました。',
  url: 'https://example.com',
}

export const Default = {
  args: props,
}
