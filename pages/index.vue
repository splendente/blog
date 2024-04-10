<script setup lang="ts">
// 降順かどうか
const desc = ref(true);

/**
 * 降順と昇順を切り替える
 */
const toggleSort = () => {
  desc.value = !desc.value;
};

/**
 * クエリを作成する
 * @returns {object} クエリ
 */
const query = computed(() => {
  return { createdAt: desc.value ? -1 : 1, $numeric: true };
});

const date = new Date();
const targetYear = ref(date.getFullYear());
</script>

<template>
  <main>
    <YearSelect class="year-select" v-model="targetYear" />
    <CalendarHeatmap :target-year="Number(targetYear)" />
    <SortMenu :desc="desc" @toggle-sort="toggleSort" class="sort-menu" />
    <ContentList path="/" v-slot="{ list }" :sort="query">
      <Card
        v-for="(article, index) in list"
        :key="index"
        :to="article._path"
        :icon="article.icon"
        :title="article.title"
        :description="article.description"
        :createdAt="article.createdAt"
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

main > .sort-menu,
main > .year-select {
  justify-self: right;
}
</style>
