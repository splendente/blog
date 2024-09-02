<script setup lang="ts">
defineProps({
  isRevealed: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["outsideClick"]);

const target = ref<HTMLElement | null>(null);

onClickOutside(target, () => emit("outsideClick"));
</script>

<template>
  <teleport to="body">
    <Transition appear>
      <div v-if="isRevealed" class="background">
        <div ref="target" class="modal">
          <slot />
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.background {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  z-index: calc(infinity);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 100%;
  height: 60vh;
  max-width: 640px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (width < 640px) {
  .modal {
    height: 90vh;
  }
}
</style>
