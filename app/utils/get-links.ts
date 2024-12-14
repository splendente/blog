type Link = {
  name: string
  href: string
}

/**
 * ナビゲーションメニューで使用する内部リンク情報を返却する
 * @returns {Array} リンク情報
 */
export const getInternalLinks = (): Link[] => {
  return [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Tags',
      href: '/tags',
    },
  ]
}

/**
 * ナビゲーションメニューで使用する外部リンク情報を返却する
 * @returns {Array} リンク情報
 */
export const getExternalLinks = (): Link[] => {
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
