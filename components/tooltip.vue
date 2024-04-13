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
</script>

<template>
  <div
    v-if="isVisible && 0 < props.date.length"
    :style="`top:${top - 24}px;left:${left - 55}px;`"
    class="tooltip"
  >
    <p>{{ formatDateString(date) }}</p>
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
