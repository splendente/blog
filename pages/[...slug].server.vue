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
  </main>
</template>

<style scoped>
.blog-header {
  text-align: center;
  padding-bottom: 32px;
  margin-bottom: 48px;
  border-bottom: 1px solid #ddd;
}

.blog-header > .title {
  font-size: 32px;
  color: #3c3c3c;
  margin-bottom: 24px;
}

.blog-header > .created-at {
  font-size: 14px;
  color: #3c3c3c;
}
</style>
