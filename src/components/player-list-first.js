import React from 'react';

export default function PlayerListFirst(props) {
    const players = props.players.map((player, index) =>
        <li key={index}>
            <strong>{player.name}</strong> {player.pos} <br></br>
        </li>
    );

    return (//Remove {players} if you don't want anything to show up at start
        <ul className="character-list">
            {players}
        </ul>
    );
}