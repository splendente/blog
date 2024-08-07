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

const query: QueryBuilderParams = {
  path: "/",
  where: [{ tags: { $contains: route.params.slug } }],
  sort: [{ createdAt: -1 }],
};
</script>

<template>
  <main>
    <h1 class="title">
      <span>{{ route.params.slug }}</span>
      の記事一覧
    </h1>
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

.title {
  font-size: 24px;
  color: #3c3c3c;
}
</style>
