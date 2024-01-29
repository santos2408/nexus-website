import { defineStore } from "pinia";

export const TOGGLE_MENU = "TOGGLE_MENU";

export const useUserStore = defineStore("user", {
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
