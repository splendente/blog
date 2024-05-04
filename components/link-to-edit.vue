<script setup lang="ts">
defineProps({
  fileName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="`https://github.com/splendente/blog/tree/main/content/${fileName}`"
    target="_blank"
    class="page-edit-link"
  >
    <img src="/assets/images/github.svg" alt="" width="20" height="20" />
    GitHubで編集を提案する
  </a>
</template>

<style scoped>
.page-edit-link {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #fff;
  font-size: 12px;
  color: #3c3c3c;
  text-decoration: none;
  gap: 0 8px;
  transition: all 0.5s ease;
}

.page-edit-link:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}
</style>
