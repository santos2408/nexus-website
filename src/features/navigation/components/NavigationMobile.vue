<template>
  <div class="fixed left-0 top-0 z-50 w-full">
    <nav class="z-50 h-screen w-72 bg-brand-black-100 px-4 py-8">
      <div class="mb-10 flex items-center justify-between">
        <a href="/">
          <img :src="logo1" class="h-10" alt="Nexus logo" height="50" />
        </a>
        <X class="cursor-pointer" color="#fff" @click="closeMenu" />
      </div>

      <ul class="mb-5 text-sm font-medium text-white">
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
        <div class="flex items-center gap-2 text-sm text-white">
          <span
            class="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-100"
          >
            <Mail color="#fff" size="14" />
          </span>
          <span>email@example.com</span>
        </div>

        <div class="mb-3 flex items-center gap-2 text-sm text-white">
          <span
            class="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-100"
          >
            <Phone color="#fff" size="14" />
          </span>
          <span>+1 (231) 102 345</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="#">
            <font-awesome-icon :icon="['fab', 'twitter']" class="text-white" />
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'facebook']" class="text-white" />
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'pinterest-p']" class="text-white" />
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-white" />
          </a>
        </div>
      </div>
    </nav>

    <div
      class="absolute right-0 top-0 -z-10 h-screen w-full bg-black opacity-50"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNavigationStore } from "@/features/navigation/stores/navigation";
import { useEventListener } from "@/composables/useEventListener";

import { Phone, Mail, X } from "lucide-vue-next";

import logo1 from "@/assets/images/logo1.svg";

const store = useNavigationStore();

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

const closeMenu = () => {
  store.toggleMenu();
};

const handleCurrentScreen = () => {
  const screenWidth = window.innerWidth;
  const isOnMobile = screenWidth < 1200;

  store.activeMenu = false;
  store.onMobile = isOnMobile ? true : false;
};

useEventListener(window, "resize", handleCurrentScreen);
</script>
