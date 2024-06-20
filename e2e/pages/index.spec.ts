import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("/index", () => {
  test("WCAG2.1に基づいたアクセシビリティテスト", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    console.log(accessibilityScanResults);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("「Home」というタイトルが設定されている", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/Home/);
  });
});
