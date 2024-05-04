import { describe, expect, test } from "vitest";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import LinkToBack from "@/components/link-to-back.vue";

describe("LinkToBackコンポーネント", () => {
  const linkToBack = shallowMount(LinkToBack, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  });

  test("「一覧に戻る」というリンクが表示されている", () => {
    expect(linkToBack.findComponent(RouterLinkStub).exists()).toBe(true);
    expect(linkToBack.findComponent(RouterLinkStub).text()).toBe("一覧に戻る");
  });
});
