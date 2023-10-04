import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const { results: pokemonsResponse, next: nextPokemonListUrl } =
        await getPokemonsApi(nextUrl);

      setNextUrl(nextPokemonListUrl);

      const pokemonsArray = [];
      // Creamos un bucle asincrono que devuelva los resultados
      for await (const pokemon of pokemonsResponse) {
        // Obtenemos la url del pokemon
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        // Añadimos a la colección de pokemons el pokemon encontrado con la información deseada
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      // Actualizamos nuestra variable manteniendo los pokemons ya cargados con los nuevos encontrados para mantener la paginación
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={loading}
      />
    </SafeAreaView>
  );
}
