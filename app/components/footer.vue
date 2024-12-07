<template>
  <footer class="footer">
    <NuxtLink
      to="/terms-and-privacy"
      class="terms-and-privacy"
    >
      Terms and Privacy
    </NuxtLink>
    <p class="copyright">
      &copy; 2024 Hikaru Kobayashi.
    </p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 16px 24px;
  background-color: var(--primary-bg-color);
  border-top: 1px solid var(--primary-border-color);
  text-align: center;
}

.terms-and-privacy,
.copyright {
  font-size: 14px;
  color: var(--primary-text-color);
}

.terms-and-privacy:hover {
  opacity: 0.7;
}

.copyright {
  margin-top: 8px;
}
</style>
