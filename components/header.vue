<template>
  <header>
    <NuxtLink to="/" class="title">Blog</NuxtLink>
    <div>
      <IconButton
        element="anchor-link"
        href="https://twitter.com/splendente_dev"
        target="_blank"
        label="X(旧Twitter)を新しいタブで表示する"
      >
        <template #icon>
          <img
            class="icon"
            width="16"
            height="16"
            src="@/assets/images/x-twitter.svg"
            alt="X(旧Twitter)"
          />
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
            class="icon"
            width="16"
            height="16"
            src="@/assets/images/github.svg"
            alt="GitHub"
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
          <img
            class="icon"
            width="16"
            height="16"
            src="@/assets/images/rss.svg"
            alt="RSSフィード"
          />
        </template>
      </IconButton>
    </div>
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
  z-index: calc(infinity);
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

.icon {
  display: block;
  width: 16px;
  height: 16px;
}
</style>
