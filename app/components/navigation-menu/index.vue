<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const internalLinks = getInternalLinks()
const externalLinks = getExternalLinks()
</script>

<template>
  <Transition appear>
    <nav
      v-show="visible"
      class="navigation-menu"
    >
      <ul>
        <li
          v-for="(link, index) in internalLinks"
          :key="index"
        >
          <a
            class="internal-link"
            :href="link.href"
          >
            {{ link.name }}
          </a>
        </li>
        <li
          v-for="(link, index) in externalLinks"
          :key="index"
        >
          <a
            class="external-link"
            :href="link.href"
            target="_blank"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
.navigation-menu {
  width: 100%;
  height: calc(100vh - 59px);
  min-width: 132px;
  position: fixed;
  top: 59px;
  right: 0;
  background-color: var(--primary-bg-color);
  z-index: calc(infinity);
}

.navigation-menu li {
  list-style: none;
}

.navigation-menu li {
  border-bottom: 1px solid var(--primary-border-color);
}

.internal-link, .external-link {
  font-size: 14px;
  text-decoration: none;
  color: var(--primary-text-color);
  padding: 16px;
}

.internal-link {
  display: block;
}

.external-link {
  display: flex;
  gap: 0 8px;
  align-items: center;
  justify-content: space-between;
}

.external-link::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: url(~/assets/images/external-link.svg) center top / cover
    no-repeat;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
