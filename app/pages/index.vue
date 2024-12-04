<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const title = route.query.tag ? `${route.query.tag}` : 'すべて'

useHead({
  title: `${title}の記事一覧`,
})

defineOgImageComponent('NuxtSeo', {
  title: `${title}の記事一覧`,
})

const { desc, toggleSort } = useSort()

const query: QueryBuilderParams = computed(() => {
  return {
    path: '/',
    where: [{ tags: route.query.tag && { $contains: route.query.tag } }],
    sort: [{ createdAt: desc.value ? -1 : 1 }],
  }
})

const date = new Date()
const targetYear = ref<number>(date.getFullYear())

/**
 * contentディレクトリ配下のコンテンツの全ての情報を取得する
 */
const { data: page } = await useAsyncData('articles', () =>
  queryContent('/')
    .where({ tags: route.query.tag && { $contains: route.query.tag } })
    .find(),
)

/**
 * コンテンツの作成日と更新日を取得する
 * @returns {Array} - 日付情報
 */
const activeDates = computed(() => {
  // 作成日と更新日を格納する配列
  const createdAtAndUpdatedAt: string[] = []

  // コンテンツが存在した場合のみ実行
  if (page.value && 0 < page.value.length) {
    page.value.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === 'createdAt' || key === 'updatedAt') {
          // 既に同一稼働日がある場合、配列への追加は行わない
          if (!createdAtAndUpdatedAt.includes(obj[key])) {
            // 重複しない場合、配列に日付を追加する
            createdAtAndUpdatedAt.push(obj[key])
          }
        }
      })
    })
  }

  return createdAtAndUpdatedAt
})

const tags = ref<string[]>([])

const { data } = await useAsyncData('tags', () =>
  queryContent('/').only(['tags']).find(),
)

if (data.value) {
  tags.value = [...new Set(data.value.flatMap(values => values.tags))]
}
</script>

<template>
  <main>
    <div class="heatmap">
      <YearSelect
        v-model="targetYear"
        class="year-select"
      />
      <CalendarHeatmap
        :target-year="Number(targetYear)"
        :active-dates="activeDates"
        :title="title"
      />
    </div>
    <div class="title-wrapper">
      <h1 class="title">
        {{ title }}
        <span>の記事一覧</span>
      </h1>
      <div class="buttons">
        <TagMenu :tags="tags" />
        <SortMenu
          :desc="desc"
          @toggle-sort="toggleSort"
        />
      </div>
    </div>
    <div class="lists">
      <ContentList
        v-slot="{ list }"
        :query="query"
      >
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

.heatmap {
  margin-bottom: 48px;
}

.heatmap .year-select {
  margin-left: auto;
  margin-bottom: 24px;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.title {
  font-size: 32px;
  color: var(--primary-text);
}

.title > span {
  font-size: 16px;
  color: var(--primary-text);
  margin-left: 8px;
}

.lists {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.buttons {
  display: flex;
  gap: 0 16px;
}

@media (width < 768px) {
  .lists {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (width < 576px) {
  .title-wrapper {
    display: block;
  }
  .title-wrapper > .buttons {
    margin-top: 16px;
  }
  .lists {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
