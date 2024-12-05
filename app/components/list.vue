<script setup lang="ts">
const props = defineProps({
  keyword: {
    type: String,
    default: '',
  },
  items: {
    type: Object,
    required: true,
  },
})

const lists = computed(() => {
  return props.items.value
})
</script>

<template>
  <div class="container">
    <p v-if="keyword && lists">
      {{ keyword }} の検索結果は {{ lists.length }} 件です。
    </p>
    <div class="wrapper">
      <ul>
        <li
          v-for="(item, index) in lists"
          :key="index"
        >
          <a :href="item.id">
            <span>{{ item.content }}</span>
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
  color: var(--primary-text);
  border-bottom: 1px solid var(--primary-border);
  padding-bottom: 16px;
  margin: 16px 0;
}

a {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid var(--primary-border);
  border-radius: 4px;
  text-decoration: none;
  color: var(--primary-text);
  overflow: hidden;
  transition: all 0.5s ease;
}

a:hover {
  background-color: var(--secondary-bg);
}

span {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
