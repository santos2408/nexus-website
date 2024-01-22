<template>
  <header class="w-full bg-white relative">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="relative superinfo-left">
          <ul
            class="relative text-white flex gap-6 py-4 text-sm leading-4 flex-1 pr-10 flex-wrap"
          >
            <li>+1 (231) 102 345</li>
            <li>email@example.com</li>
            <li>120 F 2th Yt, Melbone NY 1259</li>
          </ul>
        </div>

        <div class="bg-white h-full">Monday - Friday / 8AM - 11PM</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped>
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
}

.superinfo-left::after {
  right: 100%;
  left: -10000000px;
}
</style>
