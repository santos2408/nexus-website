<template>
  <li class="hero-list__item" data-js="hero-list__item">
    <div class="hero-list-icon__container relative z-[1] p-3">
      <slot></slot>
    </div>

    <h2 class="text-2xl font-semibold text-brand-black-100">
      <a href="#" class="transition duration-300 hover:text-brand-blue-100">
        {{ props.data.title }}
      </a>
    </h2>

    <p class="py-4 text-base text-brand-gray-100">
      {{ props.data.description }}
    </p>

    <a
      href="#"
      class="text-base font-medium transition duration-300 hover:text-brand-blue-100"
    >
      Learn More &#8594;
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    validator(value) {
      const pattern = ["title", "description", "path", "icon"].sort();
      const propsArray = Object.keys(value).sort();
      return JSON.stringify(pattern) === JSON.stringify(propsArray);
    },
  },
});
</script>

<style scoped>
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

.swiper-pagination-horizontal {
  top: 0;
  left: 60px;
  display: flex;
  flex-direction: column;
}
</style>
