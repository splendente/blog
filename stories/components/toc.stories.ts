import Toc from '@/components/toc.vue'

export default {
  title: 'components/toc',
  component: Toc,
  tags: ['autodocs'],
}

const items = {
  title: '目次のダミーデータ',
  searchDepth: 0,
  links: [
    {
      id: '1',
      depth: 1,
      text: '1章',
    },
    {
      id: '2',
      depth: 2,
      text: '2章',
    },
    {
      id: '3',
      depth: 3,
      text: '3章',
    },
  ],
}

export const Default = {
  args: {
    items: items,
  },
}
