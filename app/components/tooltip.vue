<script setup lang="ts">
defineProps({
  text: {
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
})
</script>

<template>
  <div
    :style="`top:${top}px;left:${left}px;`"
    class="tooltip"
  >
    <p>{{ text }}</p>
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
