<template>
  <header class="relative w-full bg-white py-5 lg:py-0">
    <div>
      <Transition name="navigation">
        <navigation-mobile v-show="store.activeMenu" />
      </Transition>

      <super-info />

      <div
        class="custom-container mx-auto flex items-center justify-between px-4 py-0 lg:py-4"
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
              class="font-medium text-brand-black-100 transition duration-300 hover:text-brand-blue-100"
            >
              <a href="#" class="py-3">{{ menuItem.name }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex flex-wrap">
          <div class="hidden lg:flex lg:flex-wrap lg:gap-4">
            <button
              type="button"
              data-js="search-button"
              class="search-button cursor-pointer rounded-md border border-gray-200 px-3 transition duration-300 hover:border-blue-100 hover:bg-brand-blue-100"
              @click="toggleSearch"
            >
              <Search class="search-icon transition duration-300" />
            </button>

            <action-button
              text="Get Consulting"
              style-button="primary"
              class="hidden lg:block"
            />
          </div>

          <div class="block cursor-pointer lg:hidden" @click="toggleMenu">
            <Menu color="#1a73e9" size="28" />
          </div>
        </div>
      </div>
    </div>
  </header>

  <Transition name="search-modal">
    <div
      v-show="activeSearch"
      class="search-modal fixed left-0 top-0 z-50 h-screen w-full cursor-pointer bg-brand-black-100/75"
      @click="toggleSearch"
    >
      <div
        ref="search-container-modal"
        data-js="search-container-modal"
        class="flex h-full w-full items-center justify-center"
      >
        <div class="flex w-full px-4 sm:w-auto">
          <input
            type="text"
            placeholder="Search here..."
            class="w-full rounded-l-md p-6 sm:min-w-[500px]"
          />
          <button
            type="button"
            data-js="search-button"
            class="rounded-r-md bg-brand-blue-100 px-6 transition duration-300 hover:bg-brand-blue-200"
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
import { useNavigationStore } from "@/features/navigation/stores/navigation";

import { Menu, Search } from "lucide-vue-next";

import logo2 from "@/assets/images/logo2.svg";

import NavigationMobile from "@/features/navigation/components/NavigationMobile.vue";
import SuperInfo from "@/features/navigation/components/SuperInfo.vue";
import ActionButton from "@/components/ActionButton.vue";

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
