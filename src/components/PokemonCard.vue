<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card-header"></div>
    <div class="card-body"></div>
  </div>
</template>

<style scoped>
.card {
  @apply w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border-2 border-gray-50;
}

@screen md {
  .card {
    @apply w-full max-w-lg mx-0;
  }
}
</style>
