'use strict';
import * as actiontypes from '../actions/actiontypes';

const initialState = {
  foo: 'foo',
  search: false,
  players: [],
  team: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case actiontypes.BUTTON_CLICKED:
    //   return Object.assign({}, state, {foo: 'bar'})

    case actiontypes.SET_PLAYERS:
      return Object.assign({}, state, {players: action.players})
    case actiontypes.ADD_PLAYER:
      return Object.assign({}, state, {team: action.team})     
    default:
      return state;
  } 
}
