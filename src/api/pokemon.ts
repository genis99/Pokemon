// src/api/pokemon.ts
import axios from 'axios'

export async function getPokemon(id: number) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  const data = res.data
  const nameES: string = data.names.find((n: any) => n.language.name === 'es')?.name ?? data.name
  return { id: id, name: nameES }
}

export async function getPokemonDetails(id: number) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  return res.data
}
