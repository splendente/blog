<template>
  <footer>
    <NuxtLink to="/privacy-policy" class="privacy-policy" target="_blank">
      Privacy Policy
    </NuxtLink>
    <p class="copyright">&copy; 2023 Hikaru Kobayashi.</p>
  </footer>
</template>

<style scoped>
footer {
  padding: 16px 24px;
  border-top: 1px solid #ddd;
  text-align: center;
}

footer > .privacy-policy,
footer > .copyright {
  font-size: 14px;
  color: #3c3c3c;
}

footer > .privacy-policy {
  text-decoration: underline;
}

footer > .copyright {
  margin-top: 8px;
}
</style>
