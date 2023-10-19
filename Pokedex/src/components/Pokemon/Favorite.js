import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;

  // Estado que guarda si un pokemon ya está en la lista de favoritos
  const [isFavorite, setIsFavorite] = useState(undefined);

  // Constante del icono que dependiendo del estado del pokemon (fav/no fav), sale solo el borde o sólido
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id); // Devuelve true/false de si lo tiene en la lista
        setIsFavorite(response); // Seteamos la opción de ese pokemon favorito/no favorito
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  // Constante que llama a nuestra función de añadir pokemon a favs
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id); // Llamada a la función con el id del pokemon elegido
  };

  // Constante que llama a nuestra función de eliminar pokemon de favs
  const removeFavorite = async () => {
    console.log("Eliminao");
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
