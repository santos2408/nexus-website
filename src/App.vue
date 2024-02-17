<template>
  <the-navigation />
  <the-hero />
</template>

<script>
import TheNavigation from "@/features/navigation/components/TheNavigation.vue";
import TheHero from "@/features/home/hero/components/TheHero.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheHero,
  },
};
</script>
