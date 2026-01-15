import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Generation } from '@/types/pokemon.ts'
import type { Point } from '@/types/util.ts'
import { getPokemon } from '@/api/pokemon.ts'

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
  //prettier-ignore
  const pokemonNameListES = reactive<PokemonsByGen>({
    gen1: [], gen2: [], gen3: [],
    gen4: [], gen5: [], gen6: [],
    gen7: [], gen8: [], gen9: [],
  })

  //prettier-ignore
  const loadingGen = reactive<Record<Generation, boolean>>({
    gen1: false, gen2: false, gen3: false,
    gen4: false, gen5: false, gen6: false,
    gen7: false, gen8: false, gen9: false,
  })

  async function getPokemonGen(gen: Generation, batchSize: number = 20) {
    if (pokemonNameListES[gen].length !== 0) return // TODO checkear en el componente segun state del length y el loading y evitar el call, mostrar un alert
    // TODO importar de vuetify, el dialog, las alert, las v-table, pagination y los lazy-card
    // import { createVuetify } from 'vuetify'
    // import { VPagination } from 'vuetify/components'
    // import { aliases, mdi } from 'vuetify/iconsets/mdi'
    //
    // // solo el componente que usas
    // const vuetify = createVuetify({
    //   components: { VPagination },
    //   icons: { defaultSet: 'mdi', sets: { mdi }, aliases },
    // })
    //
    // export default vuetify
    //TODO + SASS y estilos
    //
    //
    //
    //
    loadingGen[gen] = true
    const { start, end } = genAssociation[gen]

    for (let i = start; i <= end; i += batchSize) {
      //Primer parametro es arraylike, luego j se itera y aplica para cada iteracion la funcion getPokemon() que devuelve una promise por iteracion de {id y name}
      const batch = Array.from({ length: Math.min(batchSize, end - i + 1) }, (_, j) =>
        getPokemon(i + j, 'es')
      )

      const results = await Promise.all(batch)

      pokemonNameListES[gen].push(...results)
    }
    loadingGen[gen] = false
  }
  return { pokemonNameListES, loadingGen, getPokemonGen }
})
