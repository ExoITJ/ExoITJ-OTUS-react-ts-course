import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { createAppStore } from './app/store';
import { getStateFromLocalStorage } from './common/common-utils';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
const state = getStateFromLocalStorage();
const store = createAppStore(state);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
