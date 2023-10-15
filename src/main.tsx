import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './components/Themes/normalize.css';
import './components/Themes/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
