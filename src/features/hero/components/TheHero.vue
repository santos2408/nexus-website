<template>
  <div class="hero-container relative flex h-[540px] w-full justify-between xl:h-[740px]">
    <div class="custom-container z-10 mx-auto">
      <div class="flex h-full flex-col justify-center">
        <h1 class="mb-6 text-3xl font-bold capitalize text-white md:text-6xl">
          Get More Of What <br />
          You Want From Your <br />
          Bussines
        </h1>

        <p class="mb-6 max-w-[500px] text-base text-white md:max-w-[640px] md:text-xl">
          At Nexus Consulting, we redefine the future of businesses through innovative
          strategies and specialized advisory.
        </p>

        <div class="flex flex-col gap-3 min-[360px]:flex-row xl:gap-5">
          <action-button text="Get Consulting" style-button="primary" class="" />
          <action-button text="Learn More" style-button="secondary" class="" />
        </div>
      </div>
    </div>

    <div class="absolute right-0 top-0 hidden h-full xl:block">
      <img :src="hero" alt="" class="h-full" />
    </div>
  </div>
</template>

<script setup>
import ActionButton from "@/components/ActionButton.vue";

import hero from "@/assets/images/hero-bg-2.png";
</script>

<style scoped>
.hero-container {
  background-image: url(../../../assets/images/hero-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
