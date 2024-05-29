import { describe, expect, test } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import Card from "@/components/card.vue";

describe("Cardコンポーネント", () => {
  const props = {
    to: "#",
    icon: "&#127881;",
    title: "タイトル",
    description: "説明",
    createdAt: "2024-1-1",
    tags: ["JavaScript", "Vue.js"],
  };

  const card = mount(Card, {
    propsData: {
      ...props,
    },
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  });

  test("リンクとして表示されている", () => {
    expect(card.findComponent(RouterLinkStub).exists()).toBe(true);
    expect(card.props().to).toBe(props.to);
  });

  test("タイトルが表示されている", () => {
    const title = card.find(".title");

    expect(title.exists()).toBe(true);
    expect(title.text()).toBe(props.title);
  });

  test("説明が表示されている", () => {
    const description = card.find(".description");

    expect(description.exists()).toBe(true);
    expect(description.text()).toBe(props.description);
  });

  test("作成日時がフォーマットされた状態で表示されている", () => {
    const createdAt = card.find(".created-at");
    const formatedCreatedAt = new Date(props.createdAt).toDateString();

    expect(createdAt.exists()).toBe(true);
    expect(createdAt.text()).toBe(formatedCreatedAt);
  });

  test(`タグが${props.tags.length}つ表示されている`, () => {
    expect(card.findAll(".tag").length).toBe(props.tags.length);
  });
});
