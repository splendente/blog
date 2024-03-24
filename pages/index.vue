<template>
  <main>
    <ContentList
      path="/"
      v-slot="{ list }"
      :sort="{ createdAt: -1, $numeric: true }"
    >
      <Card
        v-for="(article, index) in list"
        :key="index"
        :to="article._path"
        :icon="article.icon"
        :title="article.title"
        :description="article.description"
        :createdAt="article.createdAt"
      />
    </ContentList>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 32px 0;
}
</style>
