
import * as actionTypes from './actiontypes';



export const setPlayers = players => {
    return{
        type: actionTypes.SET_PLAYERS,
        players
    }
}



export const getPlayers = () => dispatch => {
 
    // dispatch(authRequest()); //loading
    return (
        fetch('http://localhost:8080/players', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(players => dispatch(setPlayers(players)))
        .catch(err => console.log(err))

       
    );
};
