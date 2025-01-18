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

/**
 * クリックされたリンクのid属性名に対応する要素までスクロールさせる
 * @param {String} id - クリックされたリンクのid属性名
 */
const scrollToTarget = (id: string) => {
  const target = document.querySelector(`a[href^="#${id}"]`)
  const headerHeight = 90 // ヘッダーの高さ(58px) + タイトル上部の余白(32px) = 90px

  if (target) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - headerHeight,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <nav class="toc">
    <p>{{ $t('toc') }}</p>
    <ul>
      <li
        v-for="(link, index) in Array.from(items?.links)"
        :key="index"
      >
        <a
          :class="`heading-${link.depth}`"
          class="link"
          @click.prevent="scrollToTarget(link.id)"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid var(--primary-border-color);
  padding: 16px;
}

.toc p {
  font-weight: bold;
  color: var(--primary-text-color);
  margin-bottom: 16px;
}

.toc ul li {
  list-style: none;
}

.toc ul li:not(:last-child) {
  margin-bottom: 8px;
}

.link {
  color: var(--primary-text-color);
  font-size: 14px;
  text-decoration: none;
}

.link:hover {
  cursor: pointer;
  font-weight: bold;
}
</style>
