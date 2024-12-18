import SearchPokemon from "./components/SearchPokemon";
import PokemonGrid from "./components/PokemonGrid";
import Pagination from "./components/Pagination";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <div className="main-page">

      {/* Provider que maneja el estado que envuelve toda la aplicacion. */}
      <Provider store={store}>
        
        <header>
          <h1>Búsqueda Pokémon</h1>
          <h5>Eduardo Alejandro Cong Torres</h5>
        </header>

        <main>

          <SearchPokemon />

          <div className="main-grid">
            <PokemonGrid />
          </div>

          <Pagination />

        </main>

      </Provider>

    </div>
  );
}

export default App;
