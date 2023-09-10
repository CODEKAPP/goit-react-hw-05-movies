//Reviews.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../services/movieApi'; // Corrección en la importación

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener reseñas de la película
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY, // Reemplaza con tu clave de API
      },
    })
    .then((response) => {
      setReviews(response.data.results);
    })
    .catch((error) => {
      console.error('Error al obtener reseñas', error);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Reseñas</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
