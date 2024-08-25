import { test, expect } from "@playwright/test";
import { BASE_URL } from "../consts";

test("「ホーム」というタイトルが設定されていること", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page).toHaveTitle(/ホーム/);
});

test("記事の順番が昇順に並び替わること", async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole("button", { name: "昇順に並び替える" }).click();
});

test("全ての記事の一覧へ遷移すること", async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole("link", { name: "すべての記事を見る" }).click();
  await page.waitForURL(`${BASE_URL}/blog`);
  await expect(page).toHaveURL(`${BASE_URL}/blog`);
  await expect(page).toHaveTitle(/記事の一覧/);
});
