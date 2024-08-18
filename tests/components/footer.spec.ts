import { describe, expect, test } from "vitest";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Footer from "@/components/footer.vue";

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

  test("「Terms and Privacy」というリンクが表示されている", () => {
    const privacyPolicy = footer.findComponent(RouterLinkStub);
    expect(privacyPolicy.exists()).toBe(true);
    expect(privacyPolicy.text()).toBe("Terms and Privacy");
    expect(privacyPolicy.props().to).toBe("/terms-and-privacy");
  });
});
