import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App tab="home" />
    </HashRouter>
  </React.StrictMode>
);
