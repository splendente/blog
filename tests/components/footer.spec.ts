import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/footer.server.vue";

describe("Footerコンポーネント", () => {
  const footer = shallowMount(Footer);

  test("コピーライトが表示されている", () => {
    expect(footer.find("p").exists()).toBe(true);
    expect(footer.find("p").text()).toBe("© 2024 Hikaru Kobayashi.");
  });
});
