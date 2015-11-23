import React from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import store from 'store';

export default function Root(props){
  return (
    <Provider store={store}>
      <ReduxRouter/>
    </Provider>
  )
}
