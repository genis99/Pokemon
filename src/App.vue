<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import Error from '@/components/utils/Error.vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <Error />
    <PokemonCard></PokemonCard>
    <router-view />

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </BaseLayout>
</template>

<style scoped></style>
