import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Importação do Materialize CSS
 */
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';

import Adoption from './adoption';

ReactDOM.render(
  <React.StrictMode>
    <Adoption />
  </React.StrictMode>,
  document.getElementById('rootAdoption')
);
