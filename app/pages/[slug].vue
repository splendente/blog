<script setup lang="ts">
// 現在のページを取得する
const route = useRoute()

/**
 * 現在のページの前後のページ情報を取得する
 */
const { data, error } = await useAsyncData('slug', () =>
  queryContent('/')
    .only(['_path', 'title', 'description'])
    .findSurround(route.path),
)

// 前後のページ取得に失敗した場合はエラー画面を表示する
if (error.value) {
  showError({ ...error.value })
}

const router = useRouter()
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <div class="blog-header">
          <time
            class="created-at"
            datetime="{{ doc.createdAt }}"
          >
            {{ formatDateString(doc.createdAt) }}
          </time>
          <h1 class="title">
            {{ doc.title }}
          </h1>
          <p class="description">
            {{ doc.description }}
          </p>
          <div class="tags">
            <Tag
              v-for="tag in doc.tags"
              :key="tag"
              element="nuxt-link"
              :to="`/?tag=${tag}`"
              :text="tag"
            />
          </div>
        </div>
        <div class="content-wrapper">
          <div class="share-button-component">
            <p>シェア</p>
            <ShareButton
              title="記事をシェアする"
              text="この記事をシェアしよう！"
              :url="router.currentRoute.value.fullPath"
            />
          </div>
          <div id="nuxt-content">
            <Toc
              class="toc-component-sp"
              :items="doc.body?.toc"
            />
            <ContentRenderer :value="doc" />
          </div>
          <Toc
            class="toc-component-pc"
            :items="doc.body?.toc"
          />
        </div>
      </article>
      <div class="link-box">
        <LinkToBack
          to="/"
          text="一覧に戻る"
        />
        <LinkToEdit :file-name="doc._file" />
      </div>
    </ContentDoc>
    <Pager
      v-if="data"
      :prev-page="data[0]"
      :next-page="data[1]"
    />
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

.blog-header {
  text-align: center;
  padding-bottom: 32px;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--primary-border-color);
}

.title {
  font-size: 32px;
  color: var(--primary-text-color);
  margin-bottom: 16px;
}

.description {
  font-size: 14px;
  color: var(--primary-text-color);
  margin-bottom: 16px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.created-at {
  font-size: 14px;
  color: var(--primary-text-color);
  margin-bottom: 16px;
}

.link-box {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  padding: 32px 0;
  margin: 32px 0;
}

.toc-component-sp {
  margin-bottom: 48px;
}

.share-button-component, .toc-component-pc {
  display: none;
}

.share-button-component > p {
  font-size: 14px;
  color: var(--primary-text-color);
  font-weight: bold;
  margin-bottom: 8px;
}

@media (width > 768px) {
  .content-wrapper {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) 200px;
    gap: 0 32px;
  }
  .toc-component-sp {
    display: none;
  }
  .toc-component-pc {
    display: block;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 90px;
  }
  .share-button-component {
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 90px;
  }
}
</style>
