import { POKEMON_TYPE_COLORS } from "./const";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
