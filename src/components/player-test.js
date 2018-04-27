import React from 'react';
// import App from './App';
// import './App.css';
import players from '../players.json';
import LiveSearch from './live-search';


export default function PlayerTest(props) {
    return(
        <LiveSearch players={players} />
    )
   
}