import {ADD_REQUEST} from 'constants';

export function addRequest(request){
  return {
    type: ADD_REQUEST,
    payload: request
  }
}
