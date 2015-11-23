import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import requests from './requests';

const rootReducer = combineReducers({
  requests,
  router
})

export default rootReducer
