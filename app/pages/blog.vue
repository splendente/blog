<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: "記事の一覧",
});

defineOgImageComponent("NuxtSeo", {
  title: "記事の一覧",
});

const { desc, toggleSort } = useSort();

const query: QueryBuilderParams = computed(() => {
  return {
    path: "/",
    sort: [{ createdAt: desc.value ? -1 : 1 }],
  };
});
</script>

<template>
  <main>
    <SortMenu :desc="desc" class="sort-menu" @toggle-sort="toggleSort" />
    <ContentList v-slot="{ list }" :query="query">
      <Card
        v-for="(article, index) in list"
        :key="index"
        :to="article._path"
        :emoji="article.emoji"
        :title="article.title"
        :description="article.description"
        :created-at="article.createdAt"
        :tags="article.tags"
      />
    </ContentList>
  </main>
</template>

<style scoped>
main {
  display: grid;
  flex-direction: column;
  gap: 32px 0;
}

main > .sort-menu {
  justify-self: right;
}
</style>
