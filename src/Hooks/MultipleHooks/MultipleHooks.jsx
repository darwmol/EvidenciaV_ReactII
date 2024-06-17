import React from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import "./Personaje.css";

const MultipleHooks = () => {
  const params = useParams();

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );

  return (
    <div>
      <h1 className="title">Información del personaje</h1>

      {isLoading && <h1>Cargando...</h1>}
      {hasError && <h1>Hubo un error al cargar los datos del personaje.</h1>}
      {data && (
        <>
          <div className="card">
            <img className="image" src={data.image} alt={data.name} />
            <h2 className="subtitle1">{data.name}</h2>
            <hr></hr>
            <h2 className="subtitle">Vivo o muerto:</h2>
            <h3> {data.status}</h3>
         
            <h2 className="subtitle">Tipo de especie:</h2>
            <h3>{data.species}</h3>
         
            <h2 className="subtitle">Genero:</h2> 
            <h3>{data.gender}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default MultipleHooks;
