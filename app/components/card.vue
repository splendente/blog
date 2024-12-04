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
})

/**
 * 日付情報のフォーマットを変更する
 * @returns {String} - 日付情報
 */
const formatDate = computed(() => {
  return formatDateString(props.createdAt)
})
</script>

<template>
  <article class="card">
    <span v-html="emoji" />
    <time
      class="created-at"
      :datetime="createdAt"
    >{{ formatDate }}</time>
    <NuxtLink
      :to="to"
      class="title"
    >
      {{ title }}
    </NuxtLink>
    <p class="description">
      {{ description }}
    </p>
    <div>
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        element="p"
        :text="tag"
      />
    </div>
  </article>
</template>

<style scoped>
.card {
  display: grid;
  align-items: center;
  gap: 6px 12px;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto 1fr;
  padding: 24px;
  background-color: var(--primary-bg);
  border: 1px solid var(--primary-border);
  border-radius: 8px;
  transition: all 0.5s ease;
  position: relative;
}

.card:hover {
  background-color: var(--secondary-bg);
}

.card span {
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

.card:hover span {
  background-color: #e5e5e5;
}

.card .created-at {
  font-size: 14px;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  color: var(--primary-text);
}

.card .title {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  color: var(--primary-text);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card .title:hover {
  text-decoration: underline;
}

.card .title::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.card .description {
  font-size: 14px;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  color: var(--primary-text);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card > div {
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  display: flex;
  gap: 2px 8px;
  flex-wrap: wrap;
}
</style>
