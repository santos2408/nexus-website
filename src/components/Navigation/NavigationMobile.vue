<template>
  <div class="fixed top-0 left-0 w-full">
    <nav class="w-72 bg-brand-black-100 h-screen z-50 px-4 py-8">
      <div class="flex justify-between mb-10 items-center">
        <a href="/">
          <img :src="logo1" class="h-10" alt="Nexus logo" height="50" />
        </a>
        <X class="cursor-pointer" color="#fff" @click="closeMenu" />
      </div>

      <ul class="text-white text-sm font-medium mb-5">
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :class="[
            'border-t',
            'border-white',
            'border-opacity-10',
            { 'border-b': menuItem.id === menuItems.length - 1 },
          ]"
        >
          <a :href="menuItem.url" class="block py-4">{{ menuItem.name }}</a>
        </li>
      </ul>

      <div class="flex flex-col gap-4">
        <div class="text-white flex gap-2 items-center text-sm">
          <span
            class="bg-brand-blue-100 rounded-full flex items-center justify-center w-7 h-7"
          >
            <Mail color="#fff" size="14" />
          </span>
          <span>email@example.com</span>
        </div>

        <div class="text-white flex gap-2 items-center text-sm mb-3">
          <span
            class="bg-brand-blue-100 rounded-full flex items-center justify-center w-7 h-7"
          >
            <Phone color="#fff" size="14" />
          </span>
          <span>+1 (231) 102 345</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="#">
            <Twitter size="16" color="#fff" />
          </a>
          <a href="#">
            <Facebook size="16" color="#fff" />
          </a>
          <a href="#">
            <Instagram size="16" color="#fff" />
          </a>
        </div>
      </div>
    </nav>

    <div
      class="bg-black opacity-50 w-full h-screen absolute top-0 right-0 -z-10"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useUserStore } from "@/stores/user";

import { Phone, Mail, X, Twitter, Facebook, Instagram } from "lucide-vue-next";

import logo1 from "@/assets/images/logo1.svg";

const store = useUserStore();

const menuItems = ref([
  {
    id: 0,
    name: "Home",
    url: "/",
  },
  {
    id: 1,
    name: "About",
    url: "/about",
  },
  {
    id: 2,
    name: "Services",
    url: "/services",
  },
  {
    id: 3,
    name: "News",
    url: "/news",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
]);

let screenTimeoutId = ref(null);

const closeMenu = () => {
  store.toggleMenu();
};

const handleCurrentScreen = () => {
  if (screenTimeoutId.value) {
    clearTimeout(screenTimeoutId.value);
  }

  const screenWidth = window.innerWidth;
  const isOnMobile = screenWidth < 1200;

  if (isOnMobile) {
    screenTimeoutId.value = setTimeout(() => {
      store.onMobile = true;
      store.activeMenu = false;
    }, 300);
  } else {
    screenTimeoutId.value = setTimeout(() => {
      store.onMobile = false;
      store.activeMenu = false;
    }, 300);
  }
};

onMounted(() => {
  window.addEventListener("resize", handleCurrentScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleCurrentScreen);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
</style>
