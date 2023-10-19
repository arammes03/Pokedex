import { SafeAreaView, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";

export default function Favorites() {
  const [favorites, setfavorites] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getPokemonsFavoriteApi();
      console.log(response);
    })();
  });

  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
