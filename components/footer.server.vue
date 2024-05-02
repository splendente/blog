<template>
  <footer class="footer">
    <NuxtLink to="/privacy-policy" class="privacy-policy" target="_blank">
      Privacy Policy
    </NuxtLink>
    <p class="copyright">&copy; 2024 Hikaru Kobayashi.</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 16px 24px;
  border-top: 1px solid #ddd;
  text-align: center;
}

.privacy-policy,
.copyright {
  font-size: 14px;
  color: #3c3c3c;
}

.privacy-policy:hover {
  opacity: 0.7;
}

.copyright {
  margin-top: 8px;
}
</style>
