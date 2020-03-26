import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Instructions from './Pages/Instructions/Instructions';
import Play from './Pages/Play/Play';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/instructions' component={Instructions} />
      <Route path='/play' component={Play} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

