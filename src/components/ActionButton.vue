<template>
  <button type="button" :class="buttonClasses">{{ text }}</button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  styleButton: {
    type: String,
    required: true,
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const buttonClasses = computed(() =>
  props.styleButton === "primary" ? "primary" : "secondary",
);
</script>

<style scoped>
button {
  @apply rounded-md px-7 py-3 font-medium capitalize transition duration-300;
}

.primary {
  @apply bg-brand-blue-100 text-white  hover:bg-brand-blue-200;
}

.secondary {
  @apply bg-white text-brand-gray-100 hover:bg-brand-blue-200 hover:text-white;
}
</style>
