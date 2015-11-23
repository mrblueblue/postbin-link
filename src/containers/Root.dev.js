import React from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import {devTools} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import store from '../store';

export default function Root(props){
  return (
    <div>
      <Provider store={store}>
        <ReduxRouter/>
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>
  )
}
