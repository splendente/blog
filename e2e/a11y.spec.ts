import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

const testCases = [
  { path: '', title: 'ホーム' },
  { path: 'blog', title: 'すべての記事一覧' },
  { path: 'about', title: 'Hikaru Kobayashi' },
  { path: 'tags', title: 'タグ一覧' },
  { path: '?tag=Nuxt', title: 'Nuxtの記事一覧' },
  { path: 'released-on-nuxt-v3-11', title: '個別のページ' },
  { path: 'terms-and-privacy', title: '利用規約とプライバシーポリシー' },
]

for (const { path, title } of testCases) {
  test.describe('WCAGの基準に基づいたアクセシビリティテスト', () => {
    test(`${title}`, async ({ page }) => {
      await page.goto(`http://localhost:3000/${path}`)
      await page.waitForURL(`http://localhost:3000/${path}`)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      if (results.violations.length > 0) {
        createHtmlReport({
          results,
          options: { outputDir: `artifacts/${path}` },
        })
      }

      expect(results.violations).toEqual([])
    })
  })
}
