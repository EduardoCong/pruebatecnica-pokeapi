import React from "react";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../redux/pokemonSlice";
import "../styles/pagination.css";

//Componente de paginación que permite navegar entre páginas anteriores y siguientes.
//Utiliza acciones de Redux(Manejador de estado) para cambiar la página actual.

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="pagination-container">

      <button onClick={() => dispatch(prevPage())}>Anterior</button>

      <button onClick={() => dispatch(nextPage())}>Siguiente</button>
      
    </div>
  );
};

export default Pagination;
