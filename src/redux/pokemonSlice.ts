import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  // Página actual de la lista de Pokémon.
  currentPage: number;
}

// Estado inicial con la primera página.
const initialState: PokemonState = { currentPage: 1 };

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // Incrementa el número de página para navegar a la siguiente página.
    nextPage: (state) => {
      state.currentPage += 1;
    },
    // Decrementa el número de página sin permitir que sea menor a 1.
    prevPage: (state) => {
      state.currentPage = Math.max(1, state.currentPage - 1);
    },
  },
});

export const { nextPage, prevPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;
