
import * as actionTypes from './actiontypes';


export const setPlayers = players => {
    return{
        type: actionTypes.SET_PLAYERS,
        players
    }
}


