<template>
  <header>
    <NuxtLink to="/" class="title">Blog</NuxtLink>
    <div>
      <LinkButton
        :is-nuxt-link="false"
        href="https://twitter.com/mr_splendente"
        target="_blank"
      >
        <img
          class="icon"
          width="16"
          height="16"
          src="@/assets/images/x-twitter.svg"
        />
      </LinkButton>
      <LinkButton
        :is-nuxt-link="false"
        href="https://github.com/splendente/blog"
        target="_blank"
      >
        <img
          class="icon"
          width="16"
          height="16"
          src="@/assets/images/github.svg"
        />
      </LinkButton>
      <LinkButton :is-nuxt-link="false" href="/feed.xml" target="_blank">
        <img
          class="icon"
          width="16"
          height="16"
          src="@/assets/images/rss.svg"
        />
      </LinkButton>
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
