import { test, expect } from "@playwright/test";

test.describe("/index", () => {
  test("「Home」というタイトルが設定されている", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/Home/);
  });
});
