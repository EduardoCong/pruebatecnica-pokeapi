import React, { useState } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import PokemonDetailsModal from "./PokemonDetails";
import "../styles/search.css";


//Componente para buscar y mostrar sugerencias de los pokemon.
//Permite al usuario ingresar texto, filtrar pokemon por nombre, letra, etc.
//Muestra sugerencias ademas de abrir un modal con detalles del pokemon seleccionado.

const SearchPokemon: React.FC = () => {
  const {
    suggestions,      // Lista de Pokémon sugeridos según el texto ingresado.
    searchSuggestions, // Función para filtrar y obtener sugerencias.
    fetchPokemonDetails, // Función para obtener detalles de un Pokémon seleccionado.
    selectedPokemon,   // Pokémon actualmente seleccionado, si existe.
    setSelectedPokemon, // Función para actualizar el Pokémon seleccionado.
  } = usePokemonSearch();

  // Estado del texto ingresado en el campo de búsqueda.
  const [input, setInput] = useState("");

  return (
    <div className="container">

      <div className="input-container">

        <input
          placeholder="Charizard, MewTwo, Pikachu..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            searchSuggestions(e.target.value);
          }}
        />

        {suggestions.length > 0 && (
          <ul className="dropdown">

            {suggestions.map((pokemon, index) => (
              <li
                key={index}
                onClick={() => {
                  fetchPokemonDetails(pokemon.name);
                  setInput("");
                  searchSuggestions("");
                }}
              >

                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width="40"
                />

                <div>

                  <strong>

                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}

                  </strong>

                  <p style={{ margin: 0 }}>#{pokemon.id}</p>

                </div>

              </li>

            ))}

          </ul>

        )}

      </div>

        {selectedPokemon && (
          <PokemonDetailsModal
            pokemon={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
        
      </div>
  );
};

export default SearchPokemon;
