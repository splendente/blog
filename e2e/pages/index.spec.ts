import { test, expect } from '@playwright/test'
import { BASE_URL } from '../consts'

test('「すべての記事一覧」というタイトルが設定されていること', async ({ page }) => {
  await page.goto(BASE_URL)
  await page.waitForFunction(() => document.title.includes('すべての記事一覧'))
  const title = await page.title()
  expect(title).toContain('すべての記事一覧')
})
