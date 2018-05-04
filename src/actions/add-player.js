//Add 
//When the user click add player dispatch the action using player id
const API_BASE_URL = 'http://localhost:8080';

export const addPlayer = (playerId) => dispatch => {
 
    // dispatch(authRequest()); //loading
    return (
        fetch(`${API_BASE_URL}/team`, {
            method: 'PATCH',//post or patch
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playerId
            })
        })
 
            // .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            // .then((res) => dispatch(addPlayerSuccess(res)))
            // .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                // return dispatch(addPlayerError(err));

            })
    );
};

