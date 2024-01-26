<template>
  <div class="hidden lg:block relative">
    <div
      class="custom-container mx-auto px-4 justify-between items-center hidden lg:flex superinfo-container"
    >
      <div class="relative superinfo-left">
        <ul
          class="relative text-white flex py-4 text-sm flex-1 pr-12 flex-wrap lg:gap-4 xlrelative superinfo-left:gap-6"
        >
          <li class="flex items-center gap-2">
            <Phone size="15" />
            <span>+1 (231) 102 345</span>
          </li>
          <li class="flex items-center gap-2">
            <Mail size="15" />
            <span>email@example.com</span>
          </li>
          <li class="flex items-center gap-2">
            <MapPin size="15" />
            <span class="">120 F 2th Yt, Melbone NY 1259</span>
          </li>
        </ul>
      </div>

      <div class="bg-white h-full flex flex-wrap items-center gap-8">
        <div class="flex items-center gap-2">
          <Clock size="16" color="#1a73e9" />
          <span class="text-sm">Monday - Friday / 8AM - 11PM</span>
        </div>

        <span class="inline-block text-gray-200">|</span>

        <div class="flex items-center flex-wrap gap-3">
          <a href="#">
            <Twitter size="16" color="" />
          </a>
          <a href="#">
            <Facebook size="16" color="" />
          </a>
          <a href="#">
            <Instagram size="16" color="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Phone, Mail, MapPin, Clock, Twitter, Facebook, Instagram } from "lucide-vue-next";
</script>

<style scoped>
.superinfo-container::after {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(229, 231, 235, 1);
}

.superinfo-left {
  background: linear-gradient(120deg, #1a73e9 5%, rgba(255, 255, 255, 1) 5%);
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
  /* z-index: 1000000; */
  right: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
}

.superinfo-left::after {
  right: 100%;
  left: -10000000px;
}
</style>
