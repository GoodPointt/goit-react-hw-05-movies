import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import { useState } from 'react';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout isLoading={isLoading} />}>
          <Route index element={<Home setIsLoading={setIsLoading} />} />
          <Route
            path="movies"
            element={<Movies setIsLoading={setIsLoading} />}
          />

          <Route
            path="movies/:movieId"
            element={<MovieDetails setIsLoading={setIsLoading} />}
          >
            <Route path="cast" element={<Cast setIsLoading={setIsLoading} />} />
            <Route
              path="reviews"
              element={<Reviews setIsLoading={setIsLoading} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
