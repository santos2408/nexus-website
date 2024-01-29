import { defineStore } from "pinia";

export const TOGGLE_MENU = "TOGGLE_MENU";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    onMobile: false,
    activeMenu: false,
  }),
  actions: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu;
    },
  },
});
