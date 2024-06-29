<script setup lang="ts">
const { page } = useContent();

useHead({
  title: page.value.title,
});

defineOgImageComponent("NuxtSeo", {
  title: page.value.title,
});

// 現在のページを取得する
const route = useRoute();

/**
 * 現在のページの前後のページ情報を取得する
 */
const { data, error } = await useAsyncData("slug", () =>
  queryContent("/")
    .only(["_path", "title", "description"])
    .findSurround(route.path),
);

// 前後のページ取得に失敗した場合はエラー画面を表示する
if (error.value) {
  showError({ ...error.value });
}
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <div class="blog-header">
          <p class="created-at">{{ formatDateString(doc.createdAt) }}</p>
          <h1 class="title">{{ doc.title }}</h1>
          <p class="description">{{ doc.description }}</p>
        </div>
        <div id="nuxt-content">
          <ContentRenderer :value="doc" />
        </div>
      </article>
      <div class="link-box">
        <LinkToBack />
        <LinkToEdit :file-name="doc._file" />
      </div>
    </ContentDoc>
    <Pager v-if="data" :prev-page="data[0]" :next-page="data[1]" />
  </main>
</template>

<style scoped>
.blog-header {
  text-align: center;
  padding-bottom: 32px;
  margin-bottom: 48px;
  border-bottom: 1px solid #ddd;
}

.title {
  font-size: 32px;
  color: #3c3c3c;
  margin-bottom: 16px;
}

.description {
  font-size: 14px;
  color: #3c3c3c;
}

.created-at {
  font-size: 14px;
  color: #3c3c3c;
  margin-bottom: 16px;
}

.link-box {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 32px 0;
  margin: 32px 0;
}
</style>
