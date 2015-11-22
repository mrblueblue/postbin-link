import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Home from './pages/Home';
import PostBin from './pages/PostBin'

import './styles/styles.css';

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={Home} />
      <Route path=':id' component={PostBin}/>
    <Route/>
  </Router>
), document.getElementById('root'));
