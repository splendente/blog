import { describe, expect, test } from "vitest";

const targetDate = "2024-01-01";
const expectedDate = "Mon Jan 01 2024";

describe("formatDateString()", () => {
  test("英語の短縮形式に変換する", () => {
    expect(formatDateString(targetDate)).toBe(expectedDate);
  });
});
