<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="tag"># {{ text }}</p>
</template>

<style scoped>
.tag {
  display: block;
  width: fit-content;
  font-size: 12px;
  color: #3c3c3c;
  background-color: #fff;
  padding: 2px 8px;
  border: 1px solid #ddd;
  border-radius: 12px;
}
</style>
