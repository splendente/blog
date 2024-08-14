<script setup lang="ts">
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});

const lists = computed(() => {
  return props.items.value;
});
</script>

<template>
  <div>
    <ul v-if="0 < lists.length">
      <li v-for="(item, index) in lists" :key="index">
        <a :href="item.id">
          <span>{{ item.content }}</span>
        </a>
      </li>
    </ul>
    <p v-else>検索結果は０件です</p>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: calc(100% - 48px);
  overflow-y: auto;
  margin: 16px 0;
}

div::-webkit-scrollbar {
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
  color: #3c3c3c;
  align-self: center;
  justify-self: center;
}

a {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-decoration: none;
  color: #3c3c3c;
  overflow: hidden;
  transition: all 0.5s ease;
}

a:hover {
  background-color: #f6f6f6;
}

span {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
