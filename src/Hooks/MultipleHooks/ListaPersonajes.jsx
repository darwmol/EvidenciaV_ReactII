import React from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import "./ListaPersonajes.css";

const ListaPersonajes = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <div>
      <img src="rick-and-morty-logo.png" alt="" />
      <h1 className="title">Personajes</h1>

      {isLoading && <h1>Cargando...</h1>}
      {hasError && <h1>Hubo un error al cargar los personajes.</h1>}
      {data && (
        <ul>
          {data.results.map((personaje) => (
            <div className="card" key={personaje.id}>
              <img className="image" src={personaje.image} alt = "" />
              <div>
                <Link className="button" to={`/personaje/${personaje.id}`}>
                  {personaje.name}
                </Link>
              </div>
            </div>
          ))}
        </ul>
      )}

    </div>
  );
};

export default ListaPersonajes;
