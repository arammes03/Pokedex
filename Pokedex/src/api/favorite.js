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
