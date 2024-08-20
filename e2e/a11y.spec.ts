import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

const testCases = [
  "/",
  "/released-on-nuxt-v3-11",
  "/blog",
  "/tags",
  "/tags/Nuxt",
  "/terms-and-privacy",
];

testCases.forEach((path) => {
  test(`${path} › WCAGの基準に基づいたアクセシビリティテスト`, async ({
    page,
  }) => {
    await page.goto(`http://localhost:3000${path}`);
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    accessibilityScanResults.violations.forEach((result) => {
      console.log(result.description);
    });
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
