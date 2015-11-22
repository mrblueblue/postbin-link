import {ADD_REQUEST} from '../actions/requests';

export function requests(state = [], action){
  switch (action.type) {
    case ADD_REQUEST:
      return state.concat(action.payload);
    default:
      return state;
  }
}
