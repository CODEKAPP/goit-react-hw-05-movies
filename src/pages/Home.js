//Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../services/movieApi'; // Corrección en la importación
import { Link } from 'react-router-dom';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener las películas populares
    axios.get('https://api.themoviedb.org/3/trending/movie/day', {
      params: {
        api_key: API_KEY, // Reemplaza con tu clave de API
      },
    })
    .then((response) => {
      setPopularMovies(response.data.results);
    })
    .catch((error) => {
      console.error('Error al obtener las películas populares', error);
    });
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      {/* <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
<ul>
  {popularMovies.map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Home;
