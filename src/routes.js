import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'containers/App';
import Home from 'pages/Home';
import PostBin from 'pages/PostBin';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home}/>
    <Route path=':id' component={PostBin}/>
  </Route>
)
