import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/Favorites";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesStack"
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="PokemonStack"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
