<script setup lang="ts">
const { tags = [] } = defineProps({
  tags: {
    type: Array,
    required: true,
  },
})

const isVisible = ref<boolean>(false)

const target = useTemplateRef('target')

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

onClickOutside(target, () => {
  toggleVisibility()
})
</script>

<template>
  <div class="tag-menu">
    <button
      class="select-button"
      type="button"
      @click="toggleVisibility()"
    >
      {{ $t('filterByTag') }}
    </button>
    <Transition appear>
      <ul
        v-if="isVisible"
        ref="target"
        class="menu"
      >
        <li
          v-for="(tag, index) in tags"
          :key="index"
        >
          <a :href="`/?tag=${tag}`">
            {{ tag }}
          </a>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.tag-menu {
  position: relative;
}

.select-button {
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 6px 28px 6px 12px;
  border: 1px solid var(--primary-border-color);
  border-radius: 4px;
  font-size: 12px;
  color: var(--primary-text-color);
  transition: all 0.5s ease;
  position: relative;
}

.select-button:hover {
  cursor: pointer;
  background-color: var(--secondary-bg-color);
}

.select-button::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  background: url("@/assets/images/chevron-down.svg") center center / cover no-repeat;
}

.menu {
  list-style: none;
  border-radius: 4px;
  border: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 999;
}

.menu > li:not(:last-child) {
  border-bottom: 1px solid var(--primary-border-color);
}

.menu > li > a {
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 8px 16px;
  color: var(--primary-text-color);
  text-align: left;
  transition: all 0.5s ease;
}

.menu > li > a:hover {
  cursor: pointer;
  background-color: var(--secondary-bg-color);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
