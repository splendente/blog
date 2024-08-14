<script setup lang="ts">
const keyword = defineModel<string>({ default: "" });
</script>

<template>
  <input v-model="keyword" type="search" placeholder="記事を検索する" />
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
