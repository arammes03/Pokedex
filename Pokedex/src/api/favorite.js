import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/const";

// Función que devuelve los pokemons favoritos
export async function getPokemonsFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE); // Cogemos los items del storage
    return JSON.parse(response || "[]"); // Parseamos el JSON que devuelve el item, ya sea algun pokemon o vacío
  } catch (error) {
    throw error; // Lanzamos el error
  }
}

// Función que nos permite añadir un pokemon a favs a través del id
export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi(); // Llamamos a la función que nos retorna nuestros pokemons favs
    favorites.push(id); // Pusheamos el id del nuevo pokemon fav
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites)); // Seteamos el nuevo item en nuestro storage
  } catch (error) {
    throw error; // Lanzamos el error
  }
}

// Función que obtiene el listado de pokemons favs y +comprueba si ese id existe ya en la lista
export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonsFavoriteApi(); // Llamamos a la función que nos retorna nuestros pokemons favs
    return includes(response, id); // Buscamos dentro de la lista ese id
  } catch (error) {
    throw error; // Lanzamos el error
  }
}

export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi(); // LLamamos a la función que nos retorna nuestros pokemons favs
    const newFavorites = pull(favorites, id); // Nos devuelve la lista ya actualizada sin el id del pokemon que hemos borrado de favs
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites)); // Seteamos los ids actualizamos en el storage
  } catch (error) {
    throw error; // Lanzamos el error
  }
}
