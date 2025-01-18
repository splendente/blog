<template>
  <NuxtLinkLocale
    to="/"
    class="link-to-back"
  >
    {{ $t('linkToBack') }}
  </NuxtLinkLocale>
</template>

<style scoped>
.link-to-back,
.link-to-back:active,
.link-to-back:visited {
  text-decoration: none;
  color: var(--primary-text-color);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0 8px;
  width: fit-content;
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
  background: url(~/assets/images/arrow-back-up.svg) center top / cover
    no-repeat;
}
</style>
