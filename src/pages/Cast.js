//Cast.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../services/movieApi'; // Corrección en la importación

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener información sobre el reparto de la película
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          api_key: API_KEY, // Reemplaza con tu clave de API
        },
      })
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error al obtener información del reparto', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <p>{actor.character}</p>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
