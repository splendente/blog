<script setup lang="ts">
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  top: {
    type: Number,
    required: true,
  },
  left: {
    type: Number,
    required: true,
  },
});

/**
 * 日付情報のフォーマットを変更する
 * @returns {String} - 日付情報
 */
const formatDate = computed(() => {
  return formatDateString(props.date);
});
</script>

<template>
  <div
    v-if="isVisible && 0 < props.date.length"
    :style="`top:${top - 24}px;left:${left - 55}px;`"
    class="tooltip"
  >
    <p>{{ formatDate }}</p>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  width: 110px;
  height: fit-content;
  background-color: #3c3c3c;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
}

.tooltip > p {
  font-size: 12px;
  color: #fff;
}
</style>
