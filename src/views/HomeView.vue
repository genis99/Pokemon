<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { usePokemonStore } from '@/stores/pokemon.ts'
import { onMounted } from 'vue'
const pokemonStore = usePokemonStore()

onMounted(async () => {
  await pokemonStore.getPokemonGen('gen1')
  await pokemonStore.getPokemonGen('gen2')
  await pokemonStore.getPokemonGen('gen3')
  await pokemonStore.getPokemonGen('gen4')
  await pokemonStore.getPokemonGen('gen5')
  await pokemonStore.getPokemonGen('gen6')
  await pokemonStore.getPokemonGen('gen7')
  await pokemonStore.getPokemonGen('gen8')
  await pokemonStore.getPokemonGen('gen9')
})
</script>

<template>
  <main>
    <router-link to="/about">Home</router-link>
    <div v-if="pokemonStore.loadingGen['gen1']">LOADING GEN 1</div>
    <div v-else>LOADING 1 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen2']">LOADING GEN 2</div>
    <div v-else>LOADING 2 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen3']">LOADING GEN 3</div>
    <div v-else>LOADING 3 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen4']">LOADING GEN 4</div>
    <div v-else>LOADING 4 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen5']">LOADING GEN 5</div>
    <div v-else>LOADING 5 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen6']">LOADING GEN 6</div>
    <div v-else>LOADING 6 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen7']">LOADING GEN 7</div>
    <div v-else>LOADING 7 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen8']">LOADING GEN 8</div>
    <div v-else>LOADING 8 COMPLETED ✅</div>
    <div v-if="pokemonStore.loadingGen['gen9']">LOADING GEN 9</div>
    <div v-else>LOADING 9 COMPLETED ✅</div>
  </main>
</template>
