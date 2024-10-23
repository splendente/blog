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
      タグで絞り込む
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
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  color: #3c3c3c;
  transition: all 0.5s ease;
  position: relative;
}

.select-button:hover {
  cursor: pointer;
  background-color: #f6f6f6;
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
  border: 1px solid #ddd;
  background-color: #fff;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 999;
}

.menu > li:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

.menu > li > a {
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 8px 16px;
  color: #3c3c3c;
  text-align: left;
  transition: all 0.5s ease;
}

.menu > li > a:hover {
  cursor: pointer;
  background-color: #f6f6f6;
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
