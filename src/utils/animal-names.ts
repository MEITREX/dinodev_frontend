import { Animal } from '@/gql/graphql'
import type { Maybe } from '@/utils/types'

// returns a readable name for the animal
export function getAnimalName(animal: Maybe<Animal>): string {
  switch (animal) {
    case Animal.Ankylosaurus:
      return 'Ankylosaurus'
    case Animal.Dodo:
      return 'Dodo'
    case Animal.Stegosaurus:
      return 'Stegosaurus'
    case Animal.Triceratops:
      return 'Triceratops'
    case Animal.Brontosaurus:
      return 'Brontosaurus'
    case Animal.Trex:
      return 'T-Rex'
    case Animal.Mammoth:
      return 'Mammoth'
    case Animal.GiantSloth:
      return 'Giant Sloth'
    case Animal.Parasaurolophus:
      return 'Parasaurolophus'
    default:
      return animal ?? 'Unknown'
  }
}
