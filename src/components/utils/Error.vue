<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: 'Error Unknown',
  },
  retry: {
    type: Function,
    default: null,
  },
})
</script>

<template>
  <div class="error">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.error {
  @apply w-2/3 bg-red-500 h-20 flex justify-center items-center;
}
</style>
