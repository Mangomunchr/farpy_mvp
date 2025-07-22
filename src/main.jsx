import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Optional: Tailwind or global CSS import (adjust or remove if missing)
// import './style.css'; // <-- rename if needed, or remove if you don't have a CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
