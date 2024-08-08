<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: "ホーム",
});

defineOgImageComponent("NuxtSeo", {
  title: "Home",
});

const { desc, toggleSort } = useSort();

const query: QueryBuilderParams = {
  path: "/",
  sort: [{ createdAt: desc.value ? -1 : 1 }],
  limit: 4,
};

const date = new Date();
const targetYear = ref<number>(date.getFullYear());

/**
 * contentディレクトリ配下のコンテンツの全ての情報を取得する
 */
const { data: page } = await useAsyncData("articles", () =>
  queryContent("/").find(),
);

/**
 * コンテンツの作成日と更新日を取得する
 * @returns {Array} - 日付情報
 */
const activeDates = computed(() => {
  // 作成日と更新日を格納する配列
  const createdAtAndUpdatedAt: string[] = [];

  // コンテンツが存在した場合のみ実行
  if (page.value && 0 < page.value.length) {
    page.value.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === "createdAt" || key === "updatedAt") {
          // 既に同一稼働日がある場合、配列への追加は行わない
          if (!createdAtAndUpdatedAt.includes(obj[key])) {
            // 重複しない場合、配列に日付を追加する
            createdAtAndUpdatedAt.push(obj[key]);
          }
        }
      });
    });
  }

  return createdAtAndUpdatedAt;
});
</script>

<template>
  <main>
    <YearSelect v-model="targetYear" class="year-select" />
    <CalendarHeatmap
      :target-year="Number(targetYear)"
      :active-dates="activeDates"
    />
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
    <NuxtLink to="/blog" class="link-to-blog">すべての記事を見る</NuxtLink>
  </main>
</template>

<style scoped>
main {
  display: grid;
  flex-direction: column;
  gap: 32px 0;
}

main > .sort-menu,
main > .year-select {
  justify-self: right;
}

.link-to-blog,
.link-to-blog:active,
.link-to-blog:visited {
  font-size: 14px;
  text-align: center;
  color: #3c3c3c;
}
</style>
