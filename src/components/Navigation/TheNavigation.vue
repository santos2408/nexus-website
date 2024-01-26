<template>
  <header class="w-full bg-white relative py-5 lg:py-0">
    <div>
      <Transition name="navigation">
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
              data-js="search-button"
              class="transition duration-300 cursor-pointer rounded-md border border-gray-200 hover:border-blue-100 px-3 hover:bg-brand-blue-100 search-button"
              @click="toggleSearch"
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

          <div class="cursor-pointer block lg:hidden" @click="toggleMenu">
            <Menu color="#1a73e9" size="28" />
          </div>
        </div>
      </div>
    </div>
  </header>

  <Transition name="search-modal">
    <div
      v-show="activeSearch"
      class="bg-brand-black-100/75 fixed top-0 left-0 w-full h-screen search-modal cursor-pointer z-50"
      @click="toggleSearch"
    >
      <div
        ref="search-container-modal"
        data-js="search-container-modal"
        class="flex justify-center items-center h-full w-full"
      >
        <div class="flex px-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search here..."
            class="w-full sm:min-w-[500px] p-6 rounded-l-md"
          />
          <button
            type="button"
            data-js="search-button"
            class="bg-brand-blue-100 px-6 rounded-r-md hover:bg-brand-blue-200 transition duration-300"
            @click.stop="toggleSearch"
          >
            <Search color="#fff" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

const searchButton = ref(null);
const searchContainerModal = ref(null);
const activeSearch = ref(false);

const toggleMenu = () => {
  store.toggleMenu();
};

const toggleSearch = (event) => {
  const clickedElement = event.target;
  const isClickedOnSearchButton =
    clickedElement === searchButton.value ||
    Boolean(clickedElement.closest("[data-js='search-button']"));

  const isClickedOnOutside = clickedElement === searchContainerModal.value;
  const shouldToggleSearchModal = isClickedOnSearchButton || isClickedOnOutside;

  if (shouldToggleSearchModal) {
    activeSearch.value = !activeSearch.value;
  }
};

onMounted(() => {
  searchButton.value = document.querySelector("[data-js='search-button']");
  searchContainerModal.value = document.querySelector("[data-js='search-container-modal']");
});
</script>

<style scoped>
.search-icon {
  color: #1a73e9;
}

.search-button:hover .search-icon {
  color: #fff;
  border-color: red;
}

.search-modal-enter-active,
.search-modal-leave-active {
  transition: transform 0.3s ease;
}

.search-modal-enter-from,
.search-modal-leave-to {
  transform: translateY(-100%);
}

.navigation-enter-active,
.navigation-leave-active {
  transition: transform 0.3s ease;
}

.navigation-enter-from,
.navigation-leave-to {
  transform: translateX(-100%);
}
</style>
