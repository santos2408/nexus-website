<template>
  <the-navigation />
  <the-hero />
</template>

<script>
import TheNavigation from "@/features/navigation/components/TheNavigation.vue";
import TheHero from "@/features/hero/components/TheHero.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheHero,
  },
};
</script>
