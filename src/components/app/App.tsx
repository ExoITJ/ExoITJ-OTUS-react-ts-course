import React, { FC, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { AppRoutes } from '../routes';

const LoginPage = lazy(() => import('../login-page/login-page'));
const MainPage = lazy(() => import('../main-page/main-page'));

const App: FC = () => {
  const user = localStorage.getItem('user');

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>...Загрузка</div>}>
        <Routes>
          <Route path={AppRoutes.Any} element={user ? <MainPage /> : <LoginPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
