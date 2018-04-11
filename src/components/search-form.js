import React from 'react';

export default function SearchForm(props) {
    // console.log(props)
    return (
        <form onSubmit={event => event.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input
                aria-controls="player-count"
                type="search"
                id="search"
                name="search"
                placeholder="Player name or rating"
                onChange={event => props.change(event.target.value)}//grabbing the value and passing it back to parent
                // onChange={event => props.search(true)}//pass back true if there is a search item
            />
            {/* Dont need to pass back the value */}
            {/* <button onClick={props.click}>Click ME</button>    */}
        </form>
    );
}