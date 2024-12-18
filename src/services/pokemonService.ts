import axios from "axios";

//Servicio get para obtener la informacion de los pokemon.
export const getPokemonList = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000");
  return response.data.results;
};

//Servicio get para obtener la informacion sobre los detalles de los pokemon.
export const getPokemonDetails = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};
