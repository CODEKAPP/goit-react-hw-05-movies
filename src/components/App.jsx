// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import NotFound from '../pages/NotFound';
// import Header from '../components/Header'; // Importa tu componente de encabezado aquí

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense fallback={<div>{<Loader />}...</div>}>
        {/* <Header /> Agrega tu componente de encabezado aquí */}
        <Routes basename="/goit-react-hw-05-movies">
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
          {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
