// src/api/pokemon.ts
import axios from 'axios'

export async function getPokemon(id: number, lang: string) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  const data = res.data
  const name: string = data.names.find((n: any) => n.language.name === lang)?.name ?? data.name
  return { id: id, name: name }
}

export async function getPokemonDetails(id: number) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  return res.data
}
