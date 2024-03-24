<template>
  <div class="wrapper">
    <Header />
    <div>
      <slot />
    </div>
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
}

.wrapper div {
  flex: 1;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px;
}
</style>
