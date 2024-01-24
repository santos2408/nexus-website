<template>
  <header class="w-full bg-white relative py-5 lg:py-0">
    <div>
      <Transition>
        <navigation-mobile v-show="store.activeMenu" />
      </Transition>

      <super-info />

      <div
        class="custom-container mx-auto px-4 flex justify-between items-center py-0 lg:py-4"
      >
        <div>
          <a href="/">
            <img :src="logo2" class="h-11" alt="Nexus logo" height="50" />
          </a>
        </div>

        <nav class="hidden lg:block">
          <ul class="flex flex-wrap gap-10">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.id"
              class="font-medium text-brand-black-100 hover:text-brand-blue-100 transition duration-300"
            >
              <a href="#" class="py-3">{{ menuItem.name }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex flex-wrap">
          <div class="lg:flex-wrap lg:gap-4 hidden lg:flex">
            <button
              type="button"
              class="transition duration-300 cursor-pointer rounded-md border border-gray-200 hover:border-blue-100 px-3 hover:bg-brand-blue-100 search-button"
            >
              <Search class="search-icon" />
            </button>

            <button
              type="button"
              class="hidden lg:block capitalize bg-brand-blue-100 font-medium text-white px-7 py-3 rounded-md hover:bg-brand-blue-200 transition duration-300"
            >
              Get Consulting
            </button>
          </div>

          <div class="cursor-pointer block lg:hidden" @click="openMenu">
            <Menu color="#1a73e9" size="28" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

import { Menu, Search } from "lucide-vue-next";

import logo2 from "@/assets/images/logo2.svg";

import NavigationMobile from "@/components/Navigation/NavigationMobile.vue";
import SuperInfo from "@/components/Navigation/SuperInfo.vue";

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

const openMenu = () => {
  store.toggleMenu();
};
</script>

<style scoped>
.search-icon {
  color: #1a73e9;
}

.search-button:hover .search-icon {
  color: #fff;
  border-color: red;
}
</style>
