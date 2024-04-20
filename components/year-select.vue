<script setup lang="ts">
const targetYearModel = defineModel<number>({ default: 2024 });

const thisYear = new Date().getFullYear();

/**
 * 2024年から今年までの期間を算出する
 * @returns {Array}
 */
const options = computed(() => {
  // 2024年から今年までの期間
  const period = [];

  for (let year = 2024; year <= thisYear; year++) {
    period.push(year);
  }

  return period;
});
</script>

<template>
  <div class="year-select">
    <select
      name="target-year"
      id="target-year"
      v-model="targetYearModel"
      aria-label="アクティビティを表示する年を選択する"
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}年
      </option>
    </select>
  </div>
</template>

<style scoped>
.year-select {
  width: fit-content;
  height: fit-content;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.year-select > select {
  padding: 6px 12px;
  font-size: 12px;
  color: #3c3c3c;
}

.year-select > select:hover {
  cursor: pointer;
}
</style>
