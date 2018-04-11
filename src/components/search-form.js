import React from 'react';

export default function SearchForm(props) {
    console.log(props)
    return (
        <form onSubmit={event => event.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input
                aria-controls="player-count"
                type="search"
                id="search"
                name="search"
                placeholder="Kobe"
                onChange={event => props.change(event.target.value)}//grabbing the value and passing it back to parent
            />
            {/* Dont need to pass back the value */}
            {/* <button onClick={props.click}>Click ME</button>    */}
        </form>
    );
}