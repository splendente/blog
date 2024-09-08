type Link = {
  name: string
  href: string
}

/**
 * ナビゲーションメニューで使用するリンク情報を返却する
 * @returns {Array} リンク情報
 */
export default function (): Link[] {
  return [
    {
      name: 'X',
      href: 'https://twitter.com/splendente_dev',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/splendente/blog',
    },
    {
      name: 'Zenn',
      href: 'https://zenn.dev/splendente',
    },
    {
      name: 'RSS',
      href: '/feed.xml',
    },
  ]
}
