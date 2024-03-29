import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export const createAppReducer = () => rootReducer;

const reducer = createAppReducer();
export type RootState = ReturnType<typeof reducer>;
const sagaMiddleware = createSagaMiddleware();

export const createAppStore = (initialState?: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
      const defaultMiddlewares = getDefaultMiddleware().concat(sagaMiddleware);
      return process.env.NODE_ENV === 'development' ? defaultMiddlewares.concat(logger) : defaultMiddlewares;
    },
  });

export type AppStore = ReturnType<typeof createAppStore>;
export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, undefined, AnyAction>;
