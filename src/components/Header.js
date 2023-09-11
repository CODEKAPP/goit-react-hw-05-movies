import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

function Header({ showBackButton }) {
  return (
    <div>
      <div>
        <nav>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {showBackButton && <BackButton />}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
