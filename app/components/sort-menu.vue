<script setup lang="ts">
defineProps({
  desc: {
    type: Boolean,
    required: true,
  },
})

defineEmits<{
  (e: 'toggleSort'): void
}>()
</script>

<template>
  <div class="sort-menu">
    <button
      type="button"
      :class="desc ? 'desc' : 'asc'"
      :aria-label="desc ? '昇順に並び替える' : '降順に並び替える'"
      @click="$emit('toggleSort')"
    />
    <p>作成日時</p>
  </div>
</template>

<style scoped>
.sort-menu {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.sort-menu > button {
  position: relative;
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 6px;
  border-right: 1px solid #ddd;
  transition: all 0.5s ease;
}

.sort-menu > button:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}

.desc::after, .asc::after {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  top: 0;
  bottom: 0;
  left: 6px;
  margin: auto;
  background: center top / contain no-repeat;
}

.desc::after {
  background-image: url("@/assets/images/sort-descending.svg");
}

.asc::after {
  content: '';
  background-image: url("@/assets/images/sort-ascending.svg");
}

.sort-menu > p {
  font-size: 12px;
  color: #3c3c3c;
  padding: 6px 12px;
}
</style>
