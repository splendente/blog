<script setup lang="ts">
const route = useRoute();

const [prev, next] = await queryContent()
  .only(["_path", "title", "description"])
  .sort({ date: 1 })
  .findSurround(route.path);
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="blog-header">
        <h1 class="title">{{ doc.title }}</h1>
        <p class="created-at">{{ formatDateString(doc.createdAt) }}</p>
      </div>
      <div id="nuxt-content">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
    <span class="border"></span>
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
  margin-bottom: 24px;
}

.created-at {
  font-size: 14px;
  color: #3c3c3c;
}

.border {
  display: block;
  width: 100%;
  height: 1px;
  border-radius: 2px;
  background: #ddd;
  margin: 60px 0;
}
</style>
