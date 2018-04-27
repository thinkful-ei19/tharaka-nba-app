import React from 'react';
// import App from './App';
// import './App.css';
import players from '../players.json';
import LiveSearch from './live-search';


export default class PlayerTest extends React.Component {

    constructor(){
        super()
        this.state = {
            players: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/players')
        .then(res => res.json())
        .then(players => this.setState({players}))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <LiveSearch players= {this.state.players} />
        )
    }

}