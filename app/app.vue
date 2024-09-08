<script setup lang="ts">
useSeoMeta({
  title: 'Hikaru Kobayashi\'s blog',
  ogTitle: 'Hikaru Kobayashi\'s blog',
  description: 'This is my personal tech blog.',
  ogDescription: 'This is my personal tech blog.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator :throttle="0" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
