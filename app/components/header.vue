<script setup lang="ts">
const { isRevealed, reveal, cancel } = useConfirmDialog();
const { keyword, results } = useSearch();

const resetSearchKeyword = () => {
  keyword.value = "";
  cancel();
};

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
    <div class="wrapper">
      <NuxtLink to="/" class="title">Blog</NuxtLink>
      <div class="links">
        <NuxtLink to="/about" class="about">About</NuxtLink>
        <NuxtLink to="/blog" class="blog">Blog</NuxtLink>
        <NuxtLink to="/tags" class="contact">Tags</NuxtLink>
      </div>
      <div class="icons">
        <IconButton element="button" label="記事を検索する" @on-click="reveal">
          <template #icon>
            <img
              width="16"
              height="16"
              src="@/assets/images/search.svg"
              alt=""
            />
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
            <img
              width="16"
              height="16"
              src="@/assets/images/github.svg"
              alt=""
            />
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
      </div>
      <NavigationMenu :visible="navigationVisibleStatus" />
    </div>
    <Modal :is-revealed="isRevealed" @outside-click="resetSearchKeyword">
      <SearchInput v-model="keyword" />
      <List :keyword="keyword" :items="results" />
    </Modal>
  </header>
</template>

<style scoped>
header {
  padding: 16px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
}

.wrapper {
  max-width: 1216px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
