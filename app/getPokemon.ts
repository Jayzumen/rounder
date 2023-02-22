export interface Pokemon {
  name: string;
  id: number;
  image: string;
}

export async function getRandomPokemon(id?: number): Promise<Pokemon> {
  const randomId = Math.floor(Math.random() * 1008 + 1);
  if (id === randomId) {
    return await getRandomPokemon(id);
  }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();
  return {
    name: data.name,
    id: data.id,
    image: data.sprites.other["official-artwork"].front_default,
  };
}
