import React from 'react';
import './search-form.css';

export default function SearchForm(props) {
    // console.log(props)
    return (
        <form onSubmit={event => event.preventDefault()}>
            <label className="searchLabel" htmlFor="search">Search</label>&emsp;
            <input
                aria-controls="player-count"
                type="search"
                id="search"
                name="search"
                placeholder="Player name or stat"
                onChange={event => props.change(event.target.value)}//grabbing the value and passing it back to parent
                // onChange={event => props.search(true)}//pass back true if there is a search item
            />
            {/* Dont need to pass back the value */}
            {/* <button onClick={props.click}>Click ME</button>    */}
        </form>
    );
}