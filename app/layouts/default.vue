<template>
  <div class="wrapper">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--primary-bg-color);
}
</style>
