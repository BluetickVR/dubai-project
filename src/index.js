import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

