<script setup lang="ts">
const props = defineProps({
  isNuxtLink: {
    type: Boolean,
    required: true,
  },
  to: {
    type: String,
    required: false,
    default: "",
  },
  href: {
    type: String,
    required: false,
    default: "",
  },
  target: {
    type: String,
    required: false,
    default: "_self",
  },
});

defineSlots<{
  icon: () => HTMLImageElement;
}>();

// NuxtLinkコンポーネントの場合に設定する属性情報
const nuxtLinkProps = {
  to: props.to,
};

// aタグの場合に設定する属性情報
const anchorProps = {
  href: props.href,
  target: props.target,
};

/**
 * NuxtLinkという文字列からNuxtLinkコンポーネントを作成する
 * @returns {Component} NuxtLinkコンポーネント
 */
const nuxtLinkComponent = computed(() => {
  return resolveComponent("NuxtLink");
});
</script>

<template>
  <component
    :is="isNuxtLink ? nuxtLinkComponent : 'a'"
    class="link-button"
    v-bind="{
      ...(isNuxtLink && nuxtLinkProps),
      ...(!isNuxtLink && anchorProps),
    }"
  >
    <slot name="icon" />
  </component>
</template>

<style scoped>
.link-button {
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.5s ease;
}

.link-button:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}
</style>
