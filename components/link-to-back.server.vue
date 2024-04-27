<template>
  <NuxtLink to="/" class="link-to-back">一覧に戻る</NuxtLink>
</template>

<style scoped>
.link-to-back,
.link-to-back:active,
.link-to-back:visited {
  text-decoration: none;
  color: #3c3c3c;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0 4px;
}

.link-to-back:hover {
  text-decoration: underline;
  cursor: pointer;
}

.link-to-back::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background: url(~/assets/images/chevron-left.svg) center top / cover no-repeat;
}
</style>
