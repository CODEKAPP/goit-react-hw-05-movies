//Movies.js
import React, { useState } from 'react';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Aquí puedes realizar la búsqueda de películas por palabra clave
    // Puedes usar el valor de 'searchQuery' y realizar una llamada a la API
  };

  return (
    <div>
      <h1>Buscar Películas</h1>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Movies;

