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
    <div className="">
      <h4>Cast</h4>
      {cast.length > 0 ? (
        <ul
          className=""
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
          }}
        >
          {cast.map(actor => (
            <li
              className=""
              key={actor.id}
              style={{ display: 'flex', flexWrap: 'wrap' }}
            >
              <div
                className=""
                style={{
                  width: '230px',
                  height: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <img
                  className="img-thumbnail"
                  style={{ width: '120px' }}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : '../images/HollywoodStar.png'
                  }
                  alt={actor.original_name}
                />
                <div className="fw-bold" style={{ maxWidth: '220px' }}>
                  <p>{actor.name}</p>
                  <p>{actor.character}</p>
                </div>
              </div>

              {/* <p></p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </div>
  );
}

export default Cast;
