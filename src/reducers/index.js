'use strict';
import * as actiontypes from '../actions/actiontypes';

const initialState = {
  foo: 'foo',
  search: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actiontypes.BUTTON_CLICKED:
      return Object.assign({}, state, {foo: 'bar'})
    default:
      return state;
  } 
}