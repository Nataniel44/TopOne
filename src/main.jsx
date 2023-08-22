import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import { createRoot } from 'react-dom/client';
import App from './App';


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>

      <App tab="home" />

  </React.StrictMode>
);
