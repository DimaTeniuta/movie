import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '../../UI/Spinner';
import { Header } from '../Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
