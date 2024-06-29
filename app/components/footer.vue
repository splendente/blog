<template>
  <footer class="footer">
    <NuxtLink to="/terms-and-privacy" class="terms-and-privacy" target="_blank">
      Terms and Privacy
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

.terms-and-privacy,
.copyright {
  font-size: 14px;
  color: #3c3c3c;
}

.terms-and-privacy:hover {
  opacity: 0.7;
}

.copyright {
  margin-top: 8px;
}
</style>
