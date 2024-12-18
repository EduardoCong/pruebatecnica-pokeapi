import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../services/pokemonService";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/gridpokemon.css";
import PokemonDetailsModal from "./PokemonDetails";

//Componente que crea el listado en un grid 3x3 de los pokemon.
//Se muestran los datos de los pokemon.
//El usuario puede hacer clic para ver mas detalles del pokemon.

// Colores asociados a cada tipo de Pokémon.
const typeColors: { [key: string]: string } = {
  fire: "#FF5733",
  water: "#339FFF",
  electric: "#FFD700",
  grass: "#4CAF50",
  ice: "#76D7EA",
  fighting: "#C70039",
  poison: "#9C27B0",
  ground: "#D4A76A",
  flying: "#B2CEFFFF",
  psychic: "#FF69B4",
  bug: "#8BC34A",
  rock: "#795548",
  ghost: "#6A5ACD",
  dragon: "#673AB7",
  dark: "#212121",
  steel: "#607D8B",
  fairy: "#F48FB1",
  normal: "#9E9E9E",
};

const PokemonGrid: React.FC = () => {
  // Página actual para la paginación.
  const currentPage = useSelector((state: RootState) => state.pokemon.currentPage);
  // Lista de Pokémon mostrados en la cuadrícula.
  const [pokemons, setPokemons] = useState<any[]>([]);
  // Pokémon seleccionado para mostrar en el modal.
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  useEffect(() => {
    // Obtiene la lista de Pokémon correspondiente a la página actual.
    const fetchPokemons = async () => {
      const promises = [];
      for (let i = 1 + (currentPage - 1) * 6; i <= currentPage * 6; i++) {
        promises.push(getPokemonDetails(i.toString()));
      }
      const results = await Promise.all(promises);
      setPokemons(results);
    };
    fetchPokemons();
  }, [currentPage]);

  return (
    <div className="grid-container">

      <h2 className="grid-title">Pokédex Nacional</h2>

      <div className="pokemon-grid">
        
        {pokemons.map((pokemon) => (
          <div
            className="pokemon-card"
            key={pokemon.id}
            onClick={() => setSelectedPokemon(pokemon)}
          >

            <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            <h3>

              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}

            </h3>

            <div className="pokemon-types">

              {pokemon.types.map((t: any, index: number) => (
                <span
                  key={index}
                  className="pokemon-type"
                  style={{
                    backgroundColor: typeColors[t.type.name] || "#333",
                  }}
                >

                  {t.type.name.toUpperCase()}

                </span>
              ))}

            </div>

            <p className="pokemon-number">#{pokemon.id}</p>

          </div>

        ))}

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

export default PokemonGrid;
