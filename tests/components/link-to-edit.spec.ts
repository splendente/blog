import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LinkToEdit from "@/components/link-to-edit.server.vue";

describe("LinkToEditコンポーネント", () => {
  const linkToEdit = shallowMount(LinkToEdit, {});

  test("「GitHubで編集を提案する」というリンクが表示されている", () => {
    expect(linkToEdit.find("a").exists()).toBe(true);
    expect(linkToEdit.find("a").text()).toBe("GitHubで編集を提案する");
  });
});
