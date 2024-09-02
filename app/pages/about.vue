<script setup lang="ts"></script>

<template>
  <main>
    <hgroup>
      <h1>Hikaru Kobayashi</h1>
      <p>フロントエンドエンジニアです。</p>
    </hgroup>
  </main>
</template>

<style scoped>
hgroup {
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 64px 24px;
  background-image: linear-gradient(
    90deg,
    rgba(2, 73, 255, 0.05),
    rgba(255, 0, 255, 0.05)
  );
}

hgroup > h1 {
  font-size: 32px;
  color: #3c3c3c;
  margin-top: 8px;
  margin-bottom: 8px;
}

hgroup > p {
  font-size: 14px;
  color: #3c3c3c;
}
</style>
