import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Tag from "@/components/tag.vue";

describe("Tagコンポーネント", () => {
  const props = {
    text: "vitest",
  };

  const tag = shallowMount(Tag, {
    propsData: {
      text: props.text,
    },
  });

  test("「vitest」と表示される", () => {
    expect(tag.find("p").exists()).toBe(true);
    expect(tag.find("p").text()).toBe("# " + props.text);
  });
});
