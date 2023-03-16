import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';

const MainPage = lazy(() => import('../pages/MainPage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={'/movie'} element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
