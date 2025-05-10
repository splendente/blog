import { test, expect } from '@playwright/test'

test('ページタイトルが正しいこと', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page).toHaveTitle('すべての記事一覧')
  await expect(page.getByRole('heading', { name: 'すべて の記事一覧' })).toBeVisible()
})

test('記事一覧が表示されていること', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page.locator('.card')).not.toBeNull()
})

test('昇順に並び替えるボタンをクリックすると、降順に並び替えるボタンが表示されること', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const descButton = await page.locator('.desc')

  await expect(descButton).toBeVisible()
  await descButton.click()

  await page.locator('.asc').waitFor({ state: 'visible' })
  await expect(page.locator('.asc')).toBeVisible()
})

test('「タグで絞り込む」が表示されていること', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page.locator('.tag-menu').getByRole('button', { name: 'タグで絞り込む' })).toBeVisible()
})

test('「タグで絞り込む」をクリックすると、タグの選択肢が表示されること', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const tagMenu = await page.locator('.tag-menu')

  await tagMenu.getByRole('button', { name: 'タグで絞り込む' }).click()

  await expect(tagMenu.getByRole('link', { name: 'Nuxt' })).toBeVisible()
})

test('タグの選択肢をクリックすると、選択されたタグで絞り込みされること', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const tagMenu = await page.locator('.tag-menu')
  await tagMenu.getByRole('button', { name: 'タグで絞り込む' }).click()
  await tagMenu.getByRole('link', { name: 'Nuxt' }).click()

  await expect(page).toHaveTitle('Nuxtの記事一覧')
  await expect(page.getByRole('heading', { name: 'Nuxt の記事一覧' })).toBeVisible()
  await expect(page.url()).toContain('?tag=Nuxt')
})

test('「Terms and Privacy」というリンクが表示されていること', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page.getByRole('link', { name: 'Terms and Privacy' })).toBeVisible()
})

test('「Terms and Privacy」をクリックすると、利用規約とプライバシーポリシー画面に遷移すること', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await page.getByRole('link', { name: 'Terms and Privacy' }).click()

  await expect(page).toHaveURL(/terms-and-privacy/)
  await expect(page).toHaveTitle('利用規約とプライバシーポリシー')
  await expect(page.getByRole('heading', { name: '利用規約とプライバシーポリシー' })).toBeVisible()
})
