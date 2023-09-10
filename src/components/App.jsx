// App.js
// import {  Routes, Route } from 'react-router-dom';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home'; // Asegúrate de que la ruta sea correcta
// import Movies from '../pages/Movies'; // Asegúrate de que la ruta sea correcta
// import MovieDetails from '../pages/MovieDetails'; // Asegúrate de que la ruta sea correcta
// import NotFound from "../pages/NotFound";

// function App() {
//   return (
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//   );
// }

// export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Header from '../components/Header'; // Importa tu componente de encabezado aquí

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
<Header /> {/* Agrega tu componente de encabezado aquí */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
