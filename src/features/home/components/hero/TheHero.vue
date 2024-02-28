<template>
  <section>
    <swiper-container
      ref="swiperEl"
      init="false"
      class="relative flex h-[540px] w-full flex-col justify-center xl:h-[740px]"
    >
      <swiper-slide class="hero-container text-white">
        <div class="container-padding container z-10 mx-auto h-full">
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
              <action-button text="Get Consulting" style-button="primary" />
              <action-button text="Learn More" style-button="secondary" />
            </div>
          </div>
        </div>

        <div class="absolute right-0 top-0 hidden h-full xl:block">
          <img :src="hero" alt="" class="h-full" />
        </div>
      </swiper-slide>

      <swiper-slide class="hero-container text-white">
        <div class="container z-10 mx-auto h-full">
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
              <action-button text="Get Consulting" style-button="primary" />
              <action-button text="Learn More" style-button="secondary" />
            </div>
          </div>
        </div>

        <div class="absolute right-0 top-0 hidden h-full xl:block">
          <img :src="hero" alt="" class="h-full" />
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="container-padding container mx-auto mb-10 w-full">
      <ul
        class="relative -top-12 z-10 flex w-full flex-col gap-8 lg:flex-row lg:justify-between xl:-top-24"
      >
        <card-hero v-for="cardItem in cardItems" :key="cardItem.title" :data="cardItem">
          <component
            :is="cardItem.icon"
            class="hero-list-icon__icon fill-brand-blue-100 transition duration-500"
          />
        </card-hero>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import ActionButton from "@/components/ActionButton.vue";
import CardHero from "./CardHero.vue";

import handsIcon from "@/components/icons/handsIcon.vue";
import graphicsIcon from "@/components/icons/graphicsIcon.vue";
import networkingIcon from "@/components/icons/networkingIcon.vue";

import hero from "@/assets/images/hero-bg-2.png";

const swiperEl = ref(null);
const cardItems = [
  {
    title: "Business Advice",
    description: "Elevate your business with our comprehensive Business Advice services.",
    path: "Home",
    icon: handsIcon,
  },
  {
    title: "Financial Advice",
    description:
      "Navigate the financial landscape with confidence through our Financial Advice.",
    path: "Home",
    icon: graphicsIcon,
  },
  {
    title: "Risk Management",
    description: "Safeguard your business against uncertainties with our proactive solutions.",
    path: "Home",
    icon: networkingIcon,
  },
];

const swiperParams = {
  slidesPerView: 1,
  loop: true,
  pagination: {
    clickable: true,
  },
  injectStyles: [
    `
    .swiper {
      position: relative;
    }

    .swiper-horizontal > .swiper-pagination {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 60px;
    }

    .swiper-pagination-bullet {
      background-color: #fff;
      width: 12px;
      height: 12px;
    }

    .swiper-pagination-bullet-active {
      background: #fff;
      box-shadow: 0px 0px 0px 5px #080a29, 0px 0px 0px 6px #fff;
    }

    @media screen and (min-width: 1600px) {
      .swiper-horizontal > .swiper-pagination {
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        text-align: left;
        height: 100%;
        width: 10%;
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: 1280px) {
      .swiper-horizontal > .swiper-pagination {
        margin-bottom: 120px;
      }
    }
  `,
  ],
};

onMounted(() => {
  Object.assign(swiperEl.value, swiperParams);
  swiperEl.value.initialize();
});

onUnmounted(() => {
  swiperEl.value.destroy();
});
</script>

<style scoped>
.hero-container {
  background-image: url("/src/assets/images/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-list-icon__icon {
  @apply h-full w-full;
}

.hero-list__item:hover .hero-list-icon__icon {
  fill: #fff;
}
</style>
