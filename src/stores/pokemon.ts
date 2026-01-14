import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Generation } from '@/types/pokemon.ts'
import { PokemonClient } from 'pokenode-ts'

type Point = {
  start: number
  end: number
}

type PokemonsByGen = Record<Generation, { id: number; name: string }[]>

const genAssociation: Record<Generation, Point> = {
  gen1: { start: 1, end: 151 },
  gen2: { start: 152, end: 251 },
  gen3: { start: 252, end: 386 },
  gen4: { start: 387, end: 493 },
  gen5: { start: 494, end: 649 },
  gen6: { start: 650, end: 721 },
  gen7: { start: 722, end: 809 },
  gen8: { start: 810, end: 905 },
  gen9: { start: 906, end: 1025 },
}

// helpers o private functions
async function getPokemonNameES(id: number): Promise<{ id: number; name: string }> {
  return { id: id, name: 'hola' }
}

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })

// Todo el tipo de dato que se guarda en un pokemon typescript
export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonNameListES = reactive<PokemonsByGen>({
    gen1: [],
    gen2: [],
    gen3: [],
    gen4: [],
    gen5: [],
    gen6: [],
    gen7: [],
    gen8: [],
    gen9: [],
  })

  function getPokemonGen(gen: Generation) {
    if (pokemonNameListES[gen].length == 0) {
      // TODO BATCHS
    } else return pokemonNameListES[gen]
  }
})
