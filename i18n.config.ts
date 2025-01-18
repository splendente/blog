export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {
      filterByTag: 'タグで絞り込む',
      createdAt: '作成日時',
      heading: 'の記事一覧',
      all: 'すべて',
      share: 'シェア',
      toc: '目次',
      linkToBack: '一覧に戻る',
      linkToEdit: 'GitHubで編集を提案する',
      annotation: 'の記事の執筆および編集のアクティビティです。',
    },
    en: {
      filterByTag: 'Filter by Tag',
      createdAt: 'Created At',
      heading: 'articles list',
      all: 'All',
      share: 'Share',
      toc: 'Table of Contents',
      linkToBack: 'Back to home',
      linkToEdit: 'Suggest an edit via GitHub',
      annotation: 'articles writing and editing activities on this blog.',
    },
  },
}))
