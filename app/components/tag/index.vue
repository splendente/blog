<script setup lang="ts">
import type { NavigationMenu } from '@/types'

const props = defineProps<NavigationMenu>()

const nuxtLinkProps = {
  to: props.to,
}

const component = computed(() => {
  switch (props.element) {
    case 'p':
      return {
        element: 'p',
      }
    case 'nuxt-link':
      return {
        element: resolveComponent('NuxtLinkLocale'),
        props: nuxtLinkProps,
      }
    default: {
      return {
        // デフォルトではpタグとして表示する
        element: 'p',
      }
    }
  }
})
</script>

<template>
  <component
    :is="component.element"
    class="tag"
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
  color: var(--primary-text-color);
  background-color: var(--primary-bg-color);
  padding: 2px 8px;
  border: 1px solid var(--primary-border-color);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.5s ease;
}

a:hover {
  cursor: pointer;
  background-color: var(--secondary-bg-color);
}
</style>
