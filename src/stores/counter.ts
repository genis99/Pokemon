import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// Todo el tipo de dato que se guarda en un pokemon typescript
export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref([])
  const pokemon = reactive<Record<string, any>>({})

  async function loadList() {
    if (!pokemonList.value.length) {
      const data = await getPokemonList()
      pokemonList.value.push(...data)
    }
  }
  async function loadDetail(name: string) {
    if (!pokemonList[name]) {
      pokemon.value[name] = await getPokemonByName(name)
      // TODO cargar esa generacion. Como las imagenes se obtendran de urls seguramente, no son tantos datos
      //  si nos quedamos con todos las generaciones y hacemos background prefetch y lo vamos guardando en
      //  el state
    }
  }
})
