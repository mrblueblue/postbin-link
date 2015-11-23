import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {reduxReactRouter} from 'redux-router';
import reducers from '../reducers';
import routes from '../routes';
import createHistory from 'history/lib/createBrowserHistory';
import {devTools} from 'redux-devtools'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory }),
  devTools()
)(createStore);

export default finalCreateStore(reducers);
