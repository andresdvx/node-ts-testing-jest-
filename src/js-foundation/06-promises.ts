import { http } from "../plugins/http";

export const getPokemonById = async (id: string | number) => {
  try {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
  } catch (error) {
    throw 'No Compa';
  }
};
