import { describe, expect, test } from "vitest";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import NavigationMenu from "@/components/navigation-menu.vue";

describe("NavigationMenuコンポーネント", () => {
  const props = {
    visible: true,
  };
  const links = getLinks();

  const navigationMenu = shallowMount(NavigationMenu, {
    propsData: {
      ...props,
    },
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  });

  test("リンク情報と表示されているテキストおよび遷移先が一致する", () => {
    expect(() => {
      navigationMenu.findAll("a").forEach((item) => {
        return links.every((link) => {
          return (
            link.name === item.text() && link.href === item.attributes("href")
          );
        });
      });
    }).toBeTruthy();
  });
});
