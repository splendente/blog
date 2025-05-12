<script setup lang="ts">
type Props = {
  path?: string
  title?: string
  description?: string
}

defineProps({
  nextPage: {
    type: Object as () => Props,
  },
  prevPage: {
    type: Object as () => Props,
  },
})
</script>

<template>
  <div
    class="pager"
    :style="
      !nextPage ? 'justify-content: end;' : 'justify-content: space-between;'
    "
  >
    <NuxtLink
      v-if="nextPage"
      :to="nextPage.path"
      class="next-page link"
    >
      <span class="chevron-left" />
      <div>
        <p class="title">
          {{ nextPage.title }}
        </p>
        <p class="description">
          {{ nextPage.description }}
        </p>
      </div>
    </NuxtLink>
    <NuxtLink
      v-if="prevPage"
      :to="prevPage.path"
      class="prev-page link"
    >
      <div>
        <p class="title">
          {{ prevPage.title }}
        </p>
        <p class="description">
          {{ prevPage.description }}
        </p>
      </div>
      <span class="chevron-right" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.pager {
  display: flex;
  gap: 16px 32px;
}

.link {
  display: block;
  width: calc(50% - 16px);
  padding: 16px 24px;
  border: 1px solid var(--primary-border-color);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.5s ease;
}

.link:hover {
  cursor: pointer;
  background-color: var(--secondary-bg-color);
}

.next-page,
.prev-page {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 16px;
}

.next-page {
  justify-content: start;
  text-align: left;
}

.prev-page {
  justify-content: end;
  text-align: right;
}

.chevron-left,
.chevron-right {
  display: block;
  width: 24px;
  height: 24px;
}

.chevron-left {
  background: url(~/assets/images/chevron-left.svg) center top / cover no-repeat;
}

.chevron-right {
  background: url(~/assets/images/chevron-right.svg) center top / cover
    no-repeat;
}

.title {
  font-size: 16px;
  color: var(--primary-text-color);
  font-weight: bold;
  margin-bottom: 8px;
}

.description {
  font-size: 12px;
  color: var(--primary-text-color);
}

@media (width < 640px) {
  .pager {
    flex-direction: column;
  }

  .link {
    width: 100%;
  }
}
</style>
