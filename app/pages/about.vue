<script setup lang="ts"></script>

<template>
  <main>
    <NuxtImg
      src="/images/splendente.png"
      width="160"
      height="160"
      class="avatar"
    />
    <h1 class="name">
      Hikaru Kobayashi
    </h1>
    <div class="overview">
      <p>Frontend Developer from Japan.</p>
    </div>
    <div class="links">
      <a
        href="https://github.com/splendente"
        target="_blank"
      >GitHub</a>
      <a
        href="https://twitter.com/splendente_dev"
        target="_blank"
      >X</a>
      <a
        href="https://zenn.dev/splendente"
        target="_blank"
      >Zenn</a>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  padding: 32px 16px;
}

.avatar {
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto;
}

.name {
  font-size: 32px;
  text-align: center;
  margin: 32px auto 16px;
  color: #3c3c3c;
}

.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.overview > p {
  color: #3c3c3c;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 8px;
  margin-top: 24px;
}

.links > a {
  color: #1558d6;
}
</style>
