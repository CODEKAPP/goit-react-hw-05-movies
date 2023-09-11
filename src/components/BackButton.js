import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to="..">
      <button
        className="btn btn-outline-secondary"
        style={{ height: '35px', display: 'flex', alignItems: 'center' }}
      >
        Back
      </button>
    </Link>
  );
}

export default BackButton;
