import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/movies">Películas</Link></li>
          {/* Otros enlaces de navegación */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
