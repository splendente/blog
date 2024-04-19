<script setup lang="ts">
const targetYearModel = defineModel();
</script>

<template>
  <div>
    <select
      name="target-year"
      id="target-year"
      v-model="targetYearModel"
      aria-label="アクティビティを表示する年を選択する"
    >
      <option value="2024">2024年</option>
    </select>
  </div>
</template>

<style scoped>
div {
  width: fit-content;
  height: fit-content;
  border: 1px solid #ddd;
  border-radius: 8px;
}

select {
  padding: 6px 12px;
  font-size: 12px;
  color: #3c3c3c;
}

select:hover {
  cursor: pointer;
}
</style>
