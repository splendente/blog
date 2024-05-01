<script setup lang="ts">
// 現在のページを取得する
const route = useRoute();

/**
 * 現在のページの前後のページ情報を取得する
 */
const [prev, next] = await queryContent()
  .only(["_path", "title", "description"])
  .sort({ date: 1 })
  .findSurround(route.path);
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="blog-header">
        <p class="created-at">{{ formatDateString(doc.createdAt) }}</p>
        <h1 class="title">{{ doc.title }}</h1>
        <p class="description">{{ doc.description }}</p>
      </div>
      <div id="nuxt-content">
        <ContentRenderer :value="doc" />
      </div>
      <div class="link-box">
        <LinkToBack />
        <LinkToEdit :file-name="doc._file" />
      </div>
    </ContentDoc>
    <Pager :prev-page="prev" :next-page="next" />
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
