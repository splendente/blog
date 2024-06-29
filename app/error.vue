<script setup lang="ts">
type ErrorProps = {
  error: {
    statusCode: string;
  };
};

defineProps<ErrorProps>();
</script>

<template>
  <NuxtLayout>
    <p class="status-code">{{ error.statusCode }}</p>
  </NuxtLayout>
</template>

<style scoped>
.status-code {
  font-size: 32px;
}
</style>
