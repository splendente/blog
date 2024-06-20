import { test, expect } from "@playwright/test";
// import AxeBuilder from "@axe-core/playwright";

test.describe("/terms-and-privacy", () => {
  // TODO: アクセシビリティ改善時にコメントアウトを解除する
  // test("WCAG2.1に基づいたアクセシビリティテスト", async ({ page }) => {
  //   await page.goto("http://localhost:3000/");

  //   const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  //   console.log(accessibilityScanResults);
  //   expect(accessibilityScanResults.violations).toEqual([]);
  // });

  test("「利用規約とプライバシーポリシー」というタイトルが設定されている", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/terms-and-privacy");
    await expect(page).toHaveTitle(/利用規約とプライバシーポリシー/);
  });
});
