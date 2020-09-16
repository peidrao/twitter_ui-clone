import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobaStyles from './styles/GlobalStyles'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobaStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
