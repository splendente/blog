<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

const links = [
  {
    name: "X",
    href: "https://twitter.com/splendente_dev",
  },
  {
    name: "GitHub",
    href: "https://github.com/splendente/blog",
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/splendente",
  },
  {
    name: "RSS",
    href: "/feed.xml",
  },
];
</script>

<template>
  <Teleport to="body">
    <Transition appear>
      <nav v-show="visible" class="navigation-menu">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.href" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.navigation-menu {
  width: fit-content;
  min-width: 132px;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: fixed;
  top: 80px;
  right: 16px;
  background-color: #fff;
  z-index: calc(infinity);
}

.navigation-menu li {
  list-style: none;
}

.navigation-menu li:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

a {
  display: flex;
  gap: 0 8px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #3c3c3c;
  font-size: 14px;
  padding: 8px 16px;
}

a::after {
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
