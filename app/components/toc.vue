<script setup lang="ts">
type Props = {
  items: {
    title: string
    searchDepth: number
    links: {
      id: string
      depth: number
      text: string
    }[]
  }
}

defineProps<Props>()
</script>

<template>
  <nav class="toc">
    <p>目次</p>
    <ul>
      <li
        v-for="(link, index) in Array.from(items?.links)"
        :key="index"
      >
        <NuxtLink
          :to="`#${link.id}`"
          :class="`heading-${link.depth}`"
          class="link"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 16px;
}

.toc p {
  font-weight: bold;
  color: #3c3c3c;
  margin-bottom: 16px;
}

.toc ul li {
  list-style: none;
}

.toc ul li:not(:last-child) {
  margin-bottom: 8px;
}

.link {
  color: #3c3c3c;
  font-size: 14px;
  text-decoration: none;
}

.link:hover {
  font-weight: bold;
}
</style>
