<template>
  <div>
    <swiper-container
      ref="swiperEl"
      init="false"
      class="relative flex h-[540px] w-full flex-col justify-center xl:h-[740px]"
    >
      <swiper-slide class="hero-container text-white">
        <div class="custom-container z-10 mx-auto h-full">
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
        <div class="custom-container z-10 mx-auto h-full">
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

    <div class="custom-container relative mx-auto w-full">
      <ul
        class="absolute -top-12 left-2/4 z-10 flex w-full -translate-x-1/2 flex-col gap-8 px-4 lg:flex-row lg:justify-between xl:-top-24"
      >
        <li
          class="hero-list__item"
          data-js="hero-list__item"
          @mouseover="hoverTest"
          @mouseout="hoverTest2"
        >
          <div class="hero-list-icon__container relative z-[1] p-3">
            <hands-icon
              class="hero-list-icon__icon fill-brand-blue-100 transition duration-500"
            />
          </div>
          <h2 class="hero-list__title">
            <a href="#" class="transition duration-300 hover:text-brand-blue-100"
              >Business Advice</a
            >
          </h2>
          <p class="hero-list__paragraph">
            Elevate your business with our comprehensive Business Advice services.
          </p>
          <a href="#" class="hero-list__link">Learn More &#8594;</a>
        </li>

        <li class="hero-list__item" data-js="hero-list__item">
          <div class="hero-list-icon__container relative z-[1] p-4">
            <graphics-icon
              class="hero-list-icon__icon fill-brand-blue-100 transition duration-500"
            />
          </div>
          <h2 class="hero-list__title">
            <a href="#" class="transition duration-300 hover:text-brand-blue-100"
              >Financial Advice</a
            >
          </h2>
          <p class="hero-list__paragraph">
            Navigate the financial landscape with confidence through our Financial Advice.
          </p>
          <a href="#" class="hero-list__link">Learn More &#8594;</a>
        </li>

        <li class="hero-list__item" data-js="hero-list__item">
          <div class="hero-list-icon__container relative z-[1] p-4">
            <networking-icon
              class="hero-list-icon__icon fill-brand-blue-100 transition duration-500"
            />
          </div>
          <h2 class="hero-list__title">
            <a href="#" class="transition duration-300 hover:text-brand-blue-100"
              >Risk Management</a
            >
          </h2>
          <p class="hero-list__paragraph">
            Safeguard your business against uncertainties with our proactive solutions.
          </p>
          <a href="#" class="hero-list__link">Learn More &#8594;</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import ActionButton from "@/components/ActionButton.vue";
import handsIcon from "@/components/icons/handsIcon.vue";
import graphicsIcon from "@/components/icons/graphicsIcon.vue";
import networkingIcon from "@/components/icons/networkingIcon.vue";

import hero from "@/assets/images/hero-bg-2.png";

const swiperEl = ref(null);

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
</script>

<style scoped>
.hero-container {
  background-image: url("/src/assets/images/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-list__item {
  @apply flex flex-1 flex-col items-center rounded-md bg-white p-11 text-center shadow;
}

.hero-list-icon__container {
  @apply mb-8 h-20 w-20 rounded-full bg-brand-blue-100 bg-opacity-10;
}

.hero-list-icon__container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #1a73e9;
  transform: scale(0);
  transform-origin: center;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.62, 0.21, 0.45, 1.52);
  z-index: -1;
}

.hero-list__item:hover .hero-list-icon__container::before {
  transform: scale(1);
}

.hero-list-icon__icon {
  @apply h-full w-full;
}

.hero-list__item:hover .hero-list-icon__icon {
  fill: #fff;
}

.hero-list__title {
  @apply text-2xl font-semibold text-brand-black-100;
}

.hero-list__paragraph {
  @apply py-4 text-base text-brand-gray-100;
}

.hero-list__link {
  @apply text-base font-medium transition duration-300 hover:text-brand-blue-100;
}

.swiper-pagination-horizontal {
  top: 0;
  left: 60px;
  display: flex;
  flex-direction: column;
}
</style>
