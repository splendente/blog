<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
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
});
</script>

<template>
  <NuxtLink :to="to" class="card">
    <article>
      <span v-html="icon" />
      <p class="created-at">{{ formatDateString(createdAt) }}</p>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
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
  background-color: #f6f6f6;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card:hover {
  opacity: 0.7;
}

.card article {
  display: grid;
  align-items: center;
  gap: 6px 12px;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto 1fr;
}

.card article span {
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  width: 48px;
  height: 48px;
  font-size: 24px;
  background-color: #eaeaea;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
