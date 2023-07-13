import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Suspense>
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
              <Route
                path="cast"
                element={<Cast setIsLoading={setIsLoading} />}
              />
              <Route
                path="reviews"
                element={<Reviews setIsLoading={setIsLoading} />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
