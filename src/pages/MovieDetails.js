//MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../services/movieApi'; // Corrección en la importación
// import BackButton from 'components/BackButton';
import Header from 'components/Header';
import { Link, Outlet } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener detalles de la película
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: API_KEY, // Reemplaza con tu clave de API
        },
      })
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error al obtener detalles de la película', error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return <div>Cargando...</div>;
  }

  // Obtener los nombres de los géneros
  const genresNames = movieDetails.genres.map(genre => genre.name);

  return (
    <section>
      <Header showBackButton={true} />
      {/* <BackButton /> */}
      <div style={{ display: 'flex', gridGap: '15px' }}>
        <img
          className="img-thumbnail"
          style={{ width: '250px' }}
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{`User Score ${movieDetails.vote_count}`}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul style={{ display: 'flex' }}>
            {genresNames.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3>Additional information</h3>
      <Link to={`/movies/${movieId}/cast`}>Cast ...</Link>

      <Link to={`/movies/${movieId}/reviews`}>Reviews ...</Link>
      <Outlet />
      {/* <Link to={`${movieDetails.id}/credits`}>{movieDetails.title}</Link> */}
      {/* <Link to={`${movieDetails.id}`}>{movieDetails.title}</Link> */}
    </section>
  );
}

export default MovieDetails;
