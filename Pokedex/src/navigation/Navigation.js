import React from "react"; //Importación de React
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //Importación tabs
import Icon from "react-native-vector-icons/FontAwesome5"; //Importación iconos

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
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
