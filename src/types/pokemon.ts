export type Generation =
  | 'gen1'
  | 'gen2'
  | 'gen3'
  | 'gen4'
  | 'gen5'
  | 'gen6'
  | 'gen7'
  | 'gen8'
  | 'gen9'

export type PokemonName = {
  id: number
  name: string
}

export type Range = {
  start: number
  end: number
}
