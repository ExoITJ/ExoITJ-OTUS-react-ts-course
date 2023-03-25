import React, { FC, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { ErrorBoundary } from '../common/error-boundary/error-boundary';
import { AppRoutes } from '../common/routes';
import { selectUser } from '../features/system/system-selectors';
import { useAppSelector } from './store';

const LoginPage = lazy(() => import('../common/login-page/login-page'));
const MainPage = lazy(() => import('../common/main-page/main-page'));

const App: FC = () => {
  const user = useAppSelector(selectUser);

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
