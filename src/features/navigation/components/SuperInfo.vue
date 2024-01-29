<template>
  <div class="relative hidden border-b border-gray-200 lg:block">
    <div
      class="custom-container superinfo-container mx-auto hidden items-center justify-between px-4 lg:flex"
    >
      <div class="superinfo-left relative">
        <ul
          class="relative flex flex-1 flex-wrap gap-6 py-4 pr-6 text-sm text-white lg:gap-4 xl:relative xl:pr-12"
        >
          <li class="flex items-center gap-2">
            <Phone size="15" />
            <span class="leading-normal">+1 (231) 102 345</span>
          </li>
          <li class="flex items-center gap-2">
            <Mail size="15" />
            <span class="leading-normal">email@example.com</span>
          </li>
          <li class="flex items-center gap-2">
            <MapPin size="15" />
            <span class="leading-normal">120 F 2th Yt, Melbone NY 1259</span>
          </li>
        </ul>
      </div>

      <div class="flex h-full flex-wrap items-center gap-8">
        <div class="flex items-center gap-2">
          <Clock size="16" color="#1a73e9" />
          <span class="text-sm leading-normal text-brand-gray-100">
            Monday - Friday / 8AM - 11PM
          </span>
        </div>

        <span class="inline-block text-gray-200">|</span>

        <div class="flex flex-wrap items-center gap-3">
          <a href="#" class="social-icon">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="social-icon__item text-brand-gray-100 transition duration-300"
            />
          </a>
          <a href="#" class="social-icon">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="social-icon__item text-brand-gray-100 transition duration-300"
            />
          </a>
          <a href="#" class="social-icon">
            <font-awesome-icon
              :icon="['fab', 'pinterest-p']"
              class="social-icon__item text-brand-gray-100 transition duration-300"
            />
          </a>
          <a href="#" class="social-icon">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="social-icon__item text-brand-gray-100 transition duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Phone, Mail, MapPin, Clock } from "lucide-vue-next";
</script>

<style scoped>
.superinfo-container::after {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  /* background-color: rgba(229, 231, 235, 1); */
}

.superinfo-left {
  z-index: 1;
  background: linear-gradient(90deg, rgba(26, 115, 233, 1) 30%, rgba(255, 255, 255, 1) 30%);
}

.superinfo-left::before,
.superinfo-left::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #1a73e9;
}

.superinfo-left::before {
  right: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
  padding: 0;
  margin: 0;
  background-color: #1a73e9;
  z-index: -1;
}

.superinfo-left::after {
  right: 100%;
  left: -10000000px;
  background-color: #1a73e9;
  z-index: -1;
}

.social-icon:hover .social-icon__item {
  color: #1a73e9;
}
</style>
