import { test, expect } from '@playwright/test'
import { BASE_URL } from '../consts'

test('「すべての記事一覧」というタイトルが設定されていること', async ({ page }) => {
  await page.goto(BASE_URL)
  await page.waitForLoadState('domcontentloaded')
  await expect(page).toHaveTitle(/すべての記事一覧/)
})
