<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import PokemonCard from '@/components/PokemonCard.vue'
</script>

<template>
  <div>
    <PokemonCard></PokemonCard>
    <router-view />

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped></style>
