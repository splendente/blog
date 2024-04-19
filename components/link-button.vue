<script setup lang="ts">
const props = defineProps({
  isNuxtLink: {
    type: Boolean,
    required: true,
  },
  to: {
    type: String,
    required: false,
  },
  href: {
    type: String,
    required: false,
  },
  target: {
    type: String,
    required: false,
  },
});

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
    class="link-button"
    :is="isNuxtLink ? nuxtLinkComponent : 'a'"
    v-bind="{
      ...(isNuxtLink && nuxtLinkProps),
      ...(!isNuxtLink && anchorProps),
    }"
  >
    <slot />
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
}

.link-button:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}
</style>
