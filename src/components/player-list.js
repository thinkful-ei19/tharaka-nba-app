import React from 'react';

export default function PlayerList(props) {
    const players = props.players.map((player, index) =>
        <li key={index}>
            <strong>{player.name}</strong> {player.pos} <br></br>
            <span>Speed: {player.ratings[0].spd}</span> <br></br>
            <span>Strength: {player.ratings[0].stre}</span> <br></br>
            <span>Field Goal: {player.ratings[0].fg}</span> <br></br>
            <span>Handles: {player.ratings[0].drb}</span> <br></br>
            <span>Assist: {player.ratings[0].pss}</span> <br></br>
            <span>Defense: {player.ratings[0].diq}</span> <br></br>
            <div><img src={player.imgURL} alt={`picture`}/></div> <br></br>
        </li>
    );

    return (
        <ul className="character-list">
            {players}
        </ul>
    );
}