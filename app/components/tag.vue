<script setup lang="ts">
type Props = {
  element: "p" | "nuxt-link";
  text: string;
  to?: string;
};

const props = defineProps<Props>();

const nuxtLinkProps = {
  to: props.to,
};

const component = computed(() => {
  switch (props.element) {
    case "p":
      return {
        element: "p",
      };
    case "nuxt-link":
      return {
        element: resolveComponent("NuxtLink"),
        props: nuxtLinkProps,
      };
    default: {
      return {
        // デフォルトではpタグとして表示する
        element: "p",
      };
    }
  }
});
</script>

<template>
  <component
    class="tag"
    :is="component.element"
    v-bind="{ ...component.props }"
  >
    # {{ text }}
  </component>
</template>

<style scoped>
.tag {
  display: block;
  width: fit-content;
  font-size: 12px;
  color: #3c3c3c;
  background-color: #fff;
  padding: 2px 8px;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-decoration: none;
}
</style>
