import { getPokemonById } from "../js-foundation/06-promises";

describe("06 - promises", () => {
  test("get pokemon by id should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe("bulbasaur");
  });

  test("get pokemon by id should return an error  if pokemon does not exists", async () => {
    const pokemonId = 1000000;
    try {
      await getPokemonById(pokemonId);
    } catch (error) {
      expect(error).toBe('No Compa');
    }
  });
});
