<script setup lang="ts">
const { isRevealed, reveal, cancel } = useConfirmDialog()
const { keyword, results } = useSearch()

const resetSearchKeyword = () => {
  keyword.value = ''
  cancel()
}

// ナビゲーションメニューの表示・非表示状態を管理
const navigationVisibleStatus = ref<boolean>(false)

/**
 * ナビゲーションメニューの表示・非表示を切り替える
 * @param {Boolean} status - 表示する場合はtrue、非表示にする場合はfalse
 */
const toggleNavigationVisibleStatus = (status: boolean) => {
  navigationVisibleStatus.value = status
}

/**
 * ビューポートのサイズが変わった時にメニューが表示されていたら非表示にする
 */
const hideNavigationMenu = () => {
  if (!toggleNavigationVisibleStatus) return

  toggleNavigationVisibleStatus(false)
}

const navigationMenu = ref<HTMLElement | null>(null)
const navigationButton = ref<HTMLButtonElement | null>(null)

/**
 * ナビゲーションメニューが表示されている時に要素外のクリックを検知し、メニューを非表示にする
 * @param {Event} event - クリックイベントのオブジェクト
 */
const detectClickOutside = (event: Event) => {
  // ナビゲーションメニューが表示されていない場合は早期リターンする
  if (!navigationVisibleStatus.value) return

  if (
    event.target instanceof Node
    && !navigationMenu.value?.contains(event.target)
    && !navigationButton.value?.contains(event.target)
  ) {
    toggleNavigationVisibleStatus(false)
  }
}

onMounted(() => {
  window.addEventListener('resize', hideNavigationMenu)
  nextTick(() => {
    navigationMenu.value = document.querySelector('.navigation-menu')
    navigationButton.value = document.querySelector('.navigation-button')

    window.addEventListener('click', detectClickOutside)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', hideNavigationMenu)
  window.removeEventListener('click', detectClickOutside)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <a
        href="/"
        class="title"
      >
        Blog
      </a>
      <div class="icons">
        <IconButton
          element="button"
          label="記事を検索する"
          @on-click="reveal"
        >
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/search.svg"
              alt=""
            >
          </template>
        </IconButton>
        <IconButton
          element="anchor-link"
          href="https://twitter.com/splendente_dev"
          target="_blank"
          label="X(旧Twitter)を新しいタブで表示する"
        >
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/x-twitter.svg"
              alt=""
            >
          </template>
        </IconButton>
        <IconButton
          element="anchor-link"
          href="https://zenn.dev/splendente"
          target="_blank"
          label="Zennを新しいタブで表示する"
        >
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/zenn.svg"
              alt=""
            >
          </template>
        </IconButton>
        <IconButton
          element="anchor-link"
          href="https://github.com/splendente/blog"
          target="_blank"
          label="GitHubを新しいタブで表示する"
        >
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/github.svg"
              alt=""
            >
          </template>
        </IconButton>
        <IconButton
          element="anchor-link"
          href="/feed.xml"
          target="_blank"
          label="RSSフィードを新しいタブで表示する"
        >
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/rss.svg"
              alt=""
            >
          </template>
        </IconButton>
        <IconButton
          class="navigation-button"
          element="button"
          label="ナビゲーションメニューを表示する"
          @on-click="toggleNavigationVisibleStatus(!navigationVisibleStatus)"
        >
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/menu.svg"
              alt=""
            >
          </template>
        </IconButton>
      </div>
      <NavigationMenu :visible="navigationVisibleStatus" />
    </div>
    <Modal
      :is-revealed="isRevealed"
      @outside-click="resetSearchKeyword"
    >
      <div class="modal-wrapper">
        <div class="modal-header">
          <button
            type="button"
            aria-label="モーダルを閉じる"
            class="close-button"
            @click="cancel()"
          >
            <img
              width="20"
              height="20"
              src="@/assets/images/cancel.svg"
              alt=""
            >
          </button>
        </div>
        <div class="modal-body">
          <SearchInput v-model="keyword" />
          <List
            :keyword="keyword"
            :items="results"
          />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="reset-button"
            @click="keyword = ''"
          >
            検索条件をリセット
          </button>
        </div>
      </div>
    </Modal>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
}

.wrapper {
  max-width: 1216px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  text-decoration: none;
  color: #3c3c3c;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 16px;
}

.links > a {
  font-size: 16px;
  font-weight: bold;
  color: #3c3c3c;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.5s ease;
}

.links > a:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 8px;
}

.icons > button.icon-button:last-child {
  display: none;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.modal-header {
  padding: 24px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
}

.modal-body {
  width: 100%;
  height: calc(100% - 96px);
  padding: 24px;
}

.modal-footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid #ddd;
  background-color: #fff;
  width: 100%;
  padding: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 16px;
  border-radius: 4px;
  transition: all 0.5s ease;
}

.reset-button {
  color: #3c3c3c;
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  transition: all 0.5s ease;
}

.reset-button:hover,
.close-button:hover {
  cursor: pointer;
  background-color: #f6f6f6;
}

@media (width < 640px) {
  .wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .links {
    display: none;
  }
  .icons > a.icon-button {
    display: none;
  }
  .icons > button.icon-button:last-child {
    display: block;
  }
}
</style>
