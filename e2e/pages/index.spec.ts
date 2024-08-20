import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test.describe("/index", () => {
  test("WCAGの基準に基づいたアクセシビリティテスト", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    accessibilityScanResults.violations.forEach((result) => {
      console.log(result.description);
    });
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("「ホーム」というタイトルが設定されている", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/ホーム/);
  });
});
