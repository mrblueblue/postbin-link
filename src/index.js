import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router'
import Home from './pages/Home';
import Bin from './pages/Bin'

import './styles/styles.css'

render((
  <Router>
    <Route path='/' component={Home} />
    <Route path=':binurl' component={Bin} />
  </Router>
), document.getElementById('root'));

