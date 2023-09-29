import React from "react"; //Importación de React
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //Importación tabs

//Importaciones de distintas screens
import PokedexScreen from "../screens/Pokedex";
import FavoritesScreen from "../screens/Favorites";
import AccountScreen from "../screens/Account";

//Creación de los Tabs
const Tab = createBottomTabNavigator();

//Función que retorna todos los tabs
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
