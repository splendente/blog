<script setup lang="ts">
useHead({
  title: 'タグ一覧',
})

defineOgImageComponent('NuxtSeo', {
  title: 'タグ一覧',
})

const tags = ref<string[]>([])

const { data } = await useAsyncData('tags', () =>
  queryContent('/').only(['tags']).find(),
)

if (data.value) {
  tags.value = data.value.flatMap(values => values.tags)
}
</script>

<template>
  <main>
    <ul class="tags-list">
      <li
        v-for="tag in [...new Set(tags)]"
        :key="tag"
      >
        <Tag
          element="nuxt-link"
          :to="`/?tag=${tag}`"
          :text="tag"
        />
      </li>
    </ul>
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

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}
</style>
