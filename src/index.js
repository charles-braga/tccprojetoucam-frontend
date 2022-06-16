import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/**
 * Importação do Materialize CSS
 */
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';


import App from './App';
import Adoption from './Pages/adoption';
import Management from './Pages/management';

//Desafio da aula.
const Pagina404 = () => <div>Página não encontrada</div>;


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/adoption" component={Adoption} />
      <Route path="/management" component={Management} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
