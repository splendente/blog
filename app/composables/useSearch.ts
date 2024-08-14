import { computedAsync } from "@vueuse/core";

export function useSearch() {
  const keyword = ref<string>("");

  const results = computedAsync(async () => {
    return await searchContent(keyword.value);
  }, null);

  return {
    keyword,
    results,
  };
}
