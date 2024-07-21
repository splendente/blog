<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as () => string[],
    required: true,
  },
});

/**
 * 日付情報のフォーマットを変更する
 * @returns {String} - 日付情報
 */
const formatDate = computed(() => {
  return formatDateString(props.createdAt);
});
</script>

<template>
  <NuxtLink :to="to" class="card">
    <article>
      <span v-html="emoji" />
      <time class="created-at" :datetime="createdAt">{{ formatDate }}</time>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <div>
        <Tag v-for="(tag, index) in tags" :key="index" :text="tag" />
      </div>
    </article>
  </NuxtLink>
</template>

<style scoped>
.card {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.5s ease;
}

.card:hover {
  background-color: #f6f6f6;
}

.card article {
  display: grid;
  align-items: center;
  gap: 6px 12px;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto 1fr;
}

.card article span {
  grid-row: 1 / 5;
  grid-column: 1 / 2;
  width: 48px;
  height: 48px;
  font-size: 24px;
  background-color: #f6f6f6;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

.card:hover article span {
  background-color: #e5e5e5;
}

.card article .created-at {
  font-size: 14px;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  color: #3c3c3c;
}

.card article .title {
  font-size: 18px;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  color: #3c3c3c;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card article .description {
  font-size: 14px;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  color: #3c3c3c;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card > article > div {
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  display: flex;
  gap: 2px 8px;
  flex-wrap: wrap;
}
</style>
