//Index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import  App  from './components/App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <BrowserRouter basename="/goit-react-hw-05-movies"> */}
        <App />
      {/* </BrowserRouter>, */}
    </React.StrictMode>
);
