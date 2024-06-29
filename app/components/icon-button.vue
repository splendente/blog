<script setup lang="ts">
type Props = {
  element: "button" | "anchor-link" | "nuxt-link";
  type?: string;
  to?: string;
  href?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
  label: string;
};

const props = withDefaults(defineProps<Props>(), {
  element: "button",
  type: "button",
  target: "_self",
});

defineSlots<{
  icon: () => HTMLImageElement;
}>();

const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const onClick = () => {
  emit("onClick");
};

// buttonタグの場合に使用する属性情報と押下時の処理
const buttonProps = {
  "aria-label": props.label,
  type: props.type,
  onClick,
};

// aタグの場合に使用する属性情報
const anchorProps = {
  "aria-label": props.label,
  href: props.href,
  target: props.target,
};

// NuxtLinkコンポーネントの場合に使用する属性情報
const nuxtLinkProps = {
  "aria-label": props.label,
  to: props.href,
  target: props.target,
};

/**
 * @typedef Component
 * @property {string} element 要素名
 * @property {object} props 設定する属性情報、押下時のイベント処理
 *
 */

/**
 * 何の要素としてレンダリングするか判定する
 * @returns @type {Component} - 要素名と設定する属性情報、押下時のイベント処理
 */
const component = computed(() => {
  switch (props.element) {
    case "button":
      return {
        element: "button",
        props: buttonProps,
      };
    case "anchor-link":
      return {
        element: "a",
        props: anchorProps,
      };
    case "nuxt-link":
      return {
        element: resolveComponent("NuxtLink"),
        props: nuxtLinkProps,
      };
    default: {
      return {
        // デフォルトではbuttonタグとして表示する
        element: "button",
        props: buttonProps,
      };
    }
  }
});
</script>

<template>
  <component
    class="icon-button"
    :is="component.element"
    v-bind="{ ...component.props }"
  >
    <slot name="icon" />
  </component>
</template>

<style scoped>
.icon-button {
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.5s ease;
}

.icon-button:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}

:slotted(img) {
  display: block;
  width: 16px;
  height: 16px;
}
</style>
