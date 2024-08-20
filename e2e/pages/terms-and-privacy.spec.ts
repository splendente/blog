import { test, expect } from "@playwright/test";

test.describe("/terms-and-privacy", () => {
  test("「利用規約とプライバシーポリシー」というタイトルが設定されている", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/terms-and-privacy");
    await expect(page).toHaveTitle(/利用規約とプライバシーポリシー/);
  });
});
