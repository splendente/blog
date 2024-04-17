import { describe, expect, test } from "vitest";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Footer from "@/components/footer.server.vue";

describe("Footerコンポーネント", () => {
  const footer = shallowMount(Footer, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  });

  test("コピーライトが表示されている", () => {
    expect(footer.find("p").exists()).toBe(true);
    expect(footer.find("p").text()).toBe("© 2024 Hikaru Kobayashi.");
  });

  test("Privacy Policyというリンクが表示されている", () => {
    expect(footer.findComponent(RouterLinkStub).exists()).toBe(true);
    expect(footer.findComponent(RouterLinkStub).text()).toBe("Privacy Policy");
  });
});
