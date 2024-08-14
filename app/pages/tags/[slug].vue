<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const route = useRoute();
const title = `${route.params.slug} の記事一覧`;

useHead({
  title: title,
});

defineOgImageComponent("NuxtSeo", {
  title: title,
});

const { desc, toggleSort } = useSort();

const query: QueryBuilderParams = computed(() => {
  return {
    path: "/",
    where: [{ tags: { $contains: route.params.slug } }],
    sort: [{ createdAt: desc.value ? -1 : 1 }],
  };
});
</script>

<template>
  <main>
    <div class="title-wrapper">
      <h1 class="title">
        <span>{{ route.params.slug }}</span>
        の記事一覧
      </h1>
      <SortMenu :desc="desc" class="sort-menu" @toggle-sort="toggleSort" />
    </div>
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
    <LinkToBack to="/tags" text="タグ一覧に戻る" />
  </main>
</template>

<style scoped>
main {
  display: grid;
  flex-direction: column;
  gap: 32px 0;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 24px;
  color: #3c3c3c;
}

@media (width < 640px) {
  .title {
    font-size: 20px;
  }
}
</style>
