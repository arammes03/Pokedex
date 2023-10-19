import { Text } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi(); // Devuelve todos los pokemons

          const pokemonsArray = [];
          // Creamos un bucle asincrono que devuelva los resultados
          for await (const id of response) {
            // Obtenemos los detalles del pokemon
            const pokemonDetails = await getPokemonDetailsApi(id); //

            // Añadimos a la colección de pokemons el pokemon encontrado con la información deseada
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray); // Seteamos el array de pokemons
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
