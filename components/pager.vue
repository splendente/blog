<script setup lang="ts">
interface Props {
  _path?: string;
  title?: string;
  description?: string;
}

defineProps({
  nextPage: {
    type: Object as () => Props,
  },
  prevPage: {
    type: Object as () => Props,
  },
});
</script>

<template>
  <div
    class="pager"
    :style="
      !nextPage ? 'justify-content: end;' : 'justify-content: space-between;'
    "
  >
    <NuxtLink v-if="nextPage" :to="nextPage._path" class="link next-page">
      <div>
        <p class="title">{{ nextPage.title }}</p>
        <p class="description">{{ nextPage.description }}</p>
      </div>
    </NuxtLink>
    <NuxtLink v-if="prevPage" :to="prevPage._path" class="link prev-page">
      <div>
        <p class="title">{{ prevPage.title }}</p>
        <p class="description">{{ prevPage.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.pager {
  display: flex;
  gap: 16px 32px;
}

.link {
  display: block;
  width: calc(50% - 16px);
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
}

.link:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}

.next-page {
  text-align: left;
}

.prev-page {
  text-align: right;
}

.title {
  font-size: 16px;
  color: #3c3c3c;
  font-weight: bold;
  margin-bottom: 8px;
}

.description {
  font-size: 12px;
  color: #3c3c3c;
}

@media (width < 640px) {
  .pager {
    flex-direction: column;
  }

  .link {
    width: 100%;
  }
}
</style>
