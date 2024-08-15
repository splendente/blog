<script setup lang="ts">
const { isRevealed, reveal, cancel } = useConfirmDialog();
const { keyword, results } = useSearch();

// ナビゲーションメニューの表示・非表示状態を管理
const navigationVisibleStatus = ref<boolean>(false);

/**
 * ナビゲーションメニューの表示・非表示を切り替える
 * @param {Boolean} status - 表示する場合はtrue、非表示にする場合はfalse
 */
const toggleNavigationVisibleStatus = (status: boolean) => {
  navigationVisibleStatus.value = status;
};

/**
 * ビューポートのサイズが変わった時にメニューが表示されていたら非表示にする
 */
const hideNavigationMenu = () => {
  if (!toggleNavigationVisibleStatus) return;

  toggleNavigationVisibleStatus(false);
};

const navigationMenu = ref<HTMLElement | null>(null);
const navigationButton = ref<HTMLButtonElement | null>(null);

/**
 * ナビゲーションメニューが表示されている時に要素外のクリックを検知し、メニューを非表示にする
 * @param {Event} event - クリックイベントのオブジェクト
 */
const detectClickOutside = (event: Event) => {
  // ナビゲーションメニューが表示されていない場合は早期リターンする
  if (!navigationVisibleStatus.value) return;

  if (
    event.target instanceof Node &&
    !navigationMenu.value?.contains(event.target) &&
    !navigationButton.value?.contains(event.target)
  ) {
    toggleNavigationVisibleStatus(false);
  }
};

onMounted(() => {
  window.addEventListener("resize", hideNavigationMenu);
  nextTick(() => {
    navigationMenu.value = document.querySelector(".navigation-menu");
    navigationButton.value = document.querySelector(".navigation-button");

    window.addEventListener("click", detectClickOutside);
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", hideNavigationMenu);
  window.removeEventListener("click", detectClickOutside);
});
</script>

<template>
  <header>
    <NuxtLink to="/" class="title">Blog</NuxtLink>
    <div class="icons">
      <IconButton element="button" label="記事を検索する" @on-click="reveal">
        <template #icon>
          <img width="16" height="16" src="@/assets/images/search.svg" alt="" />
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
          />
        </template>
      </IconButton>
      <IconButton
        element="anchor-link"
        href="https://zenn.dev/splendente"
        target="_blank"
        label="Zennを新しいタブで表示する"
      >
        <template #icon>
          <img width="16" height="16" src="@/assets/images/zenn.svg" alt="" />
        </template>
      </IconButton>
      <IconButton
        element="anchor-link"
        href="https://github.com/splendente/blog"
        target="_blank"
        label="GitHubを新しいタブで表示する"
      >
        <template #icon>
          <img width="16" height="16" src="@/assets/images/github.svg" alt="" />
        </template>
      </IconButton>
      <IconButton
        element="anchor-link"
        href="/feed.xml"
        target="_blank"
        label="RSSフィードを新しいタブで表示する"
      >
        <template #icon>
          <img width="16" height="16" src="@/assets/images/rss.svg" alt="" />
        </template>
      </IconButton>
    </div>
    <IconButton
      class="navigation-button"
      element="button"
      label="ナビゲーションメニューを表示する"
      @on-click="toggleNavigationVisibleStatus(!navigationVisibleStatus)"
    >
      <template #icon>
        <img width="16" height="16" src="@/assets/images/menu.svg" alt="" />
      </template>
    </IconButton>
    <NavigationMenu :visible="navigationVisibleStatus" />
    <Modal :is-revealed="isRevealed" @outside-click="cancel">
      <SearchInput v-model="keyword" />
      <List :keyword="keyword" :items="results" />
    </Modal>
  </header>
</template>

<style scoped>
header {
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
}

header .title {
  text-decoration: none;
  color: #3c3c3c;
}

header > div {
  display: flex;
  align-items: center;
  gap: 0 8px;
}

.navigation-button {
  display: none;
}

@media (width < 640px) {
  .icons {
    display: none;
  }

  .navigation-button {
    display: block;
  }
}
</style>
