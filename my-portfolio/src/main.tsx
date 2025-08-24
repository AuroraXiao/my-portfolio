import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SITE } from './data/site';
import App from './App';
import './index.css';

document.title = SITE.title;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-portfolio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


