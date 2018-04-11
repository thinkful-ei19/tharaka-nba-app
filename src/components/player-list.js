import React from 'react';

export default function PlayerList(props) {
    const players = props.players.map((player, index) =>
        <li key={index}>
            <strong>{player.name}</strong> {player.pos} <br></br>
            <span>Speed: {player.ratings[0].spd}</span>
            
        </li>
    );
    return (
        <ul className="character-list">
            {players}
        </ul>
    );
}