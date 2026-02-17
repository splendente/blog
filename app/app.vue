<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'

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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Analytics />
</template>
