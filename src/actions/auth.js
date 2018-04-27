
export const signup = (username, password) => dispatch => {
    console.log(username, password);
    
    // dispatch(authRequest());
    // return (
    //     fetch(`${API_BASE_URL}/auth/signup`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username,
    //             password
    //         })
    //     })
    //         // Reject any requests which don't return a 200 status, creating
    //         // errors which follow a consistent format
    //         .then(res => normalizeResponseErrors(res))
    //         .then(res => res.json())
    //         .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    //         .catch(err => {
    //             const {code} = err;
    //             const message =
    //                 code === 401
    //                     ? 'Incorrect username or password'
    //                     : 'Unable to login, please try again';
    //             dispatch(authError(err));
    //             // Could not authenticate, so return a SubmissionError for Redux
    //             // Form
    //             return Promise.reject(
    //                 new SubmissionError({
    //                     _error: message
    //                 })
    //             );
    //         })
    // );
};

