import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { BASE_URL } from "./consts";

const testCases = [
  { path: "/", title: "ホーム" },
  { path: "/blog", title: "すべての記事一覧" },
  { path: "/tags", title: "タグ一覧" },
  { path: "/tags/Nuxt", title: "Nuxtの記事一覧" },
  { path: "/released-on-nuxt-v3-11", title: "個別のページ" },
  { path: "/terms-and-privacy", title: "利用規約とプライバシーポリシー" },
];

test.describe("WCAGの基準に基づいたアクセシビリティテスト", () => {
  for (const { path, title } of testCases) {
    test(`${title}`, async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      accessibilityScanResults.violations.forEach((result) => {
        console.log(result.description);
      });
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
