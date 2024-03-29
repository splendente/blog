<script setup lang="ts">
defineProps({
  desc: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["toggleSort"]);
</script>

<template>
  <div>
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
div {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 6px;
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

div::before {
  content: "";
  border: 0.5px solid #3c3c3c;
  align-self: stretch;
  order: 2;
}

button {
  display: block;
  width: 16px;
  height: 16px;
  background: center top / cover no-repeat;
  order: 1;
}

button.desc {
  background-image: url("/assets/images/sort-descending.svg");
}

button.asc {
  background-image: url("/assets/images/sort-ascending.svg");
}

p {
  font-size: 12px;
  color: #3c3c3c;
  order: 3;
}
</style>
