//Movies.js
import React, { useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../services/movieApi';
import { Link } from 'react-router-dom';
// import BackButton from 'components/BackButton';
import Header from 'components/Header';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false); // Nuevo estado para indicar si no hay resultados

  const handleSearch = () => {
    // Realizar la búsqueda de películas por palabra clave
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      })
      .then(response => {
        // setSearchResults(response.data.results);
        if (response.data.results.length === 0) {
          setNoResults(true); // Si no hay resultados, establece noResults a true
        } else {
          setNoResults(false); // Si hay resultados, establece noResults a false
        }
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda', error);
      });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section>
      <Header showBackButton={true} />
      {/* <BackButton/> */}
      <h1>Search movies</h1>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress} // Escuchar evento de tecla presionada
        />
        <button className="btn btn-outline-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {noResults && (
        <h4>
          No movie results found: <span>{searchQuery}</span>
        </h4>
      )}{' '}
      {/* Mostrar mensaje si no hay resultados */}
      <ul className="list-group ">
        {searchResults.map(movie => (
          <li className="list-group-item" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Movies;
