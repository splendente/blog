<script setup lang="ts">
defineProps({
  keyword: {
    type: String,
    default: '',
  },
  items: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="container">
    <p v-if="keyword && items">
      {{ keyword }} の検索結果は {{ items.length }} 件です。
    </p>
    <div class="wrapper">
      <ul>
        <li
          v-for="(data, index) in items"
          :key="index"
        >
          <a :href="data.item.id">
            <span>{{ data.item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: calc(100% - 185px);
  overflow-y: auto;
  margin: 16px 0;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
}

p {
  font-size: 14px;
  color: var(--primary-text-color);
  border-bottom: 1px solid var(--primary-border-color);
  padding-bottom: 16px;
  margin: 16px 0;
}

a {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid var(--primary-border-color);
  border-radius: 4px;
  text-decoration: none;
  color: var(--primary-text-color);
  overflow: hidden;
  transition: all 0.5s ease;
}

a:hover {
  background-color: var(--secondary-bg-color);
}

span {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
