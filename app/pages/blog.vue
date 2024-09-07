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
    <div class="title-wrapper">
      <h1 class="title">
        すべて
        <span>の記事一覧</span>
      </h1>
      <SortMenu :desc="desc" @toggle-sort="toggleSort" />
    </div>
    <div class="lists">
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
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  padding: 32px 16px;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.title {
  font-size: 32px;
  color: #3c3c3c;
}

.title > span {
  font-size: 16px;
  color: #3c3c3c;
  margin-left: 8px;
}

.lists {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (width < 768px) {
  .lists {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (width < 576px) {
  .lists {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
