import React from 'react';
import SearchForm from './search-form';
// import CharacterCount from './character-count';
import PlayerList from './player-list';

export default class LiveSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    setPlayerSearch(searchTerm) {
        this.setState({searchTerm})  
    }

    render() {
        const players = this.props.players.filter(player => {
            let searchStr = player.name + player.pos + player.ratings[0].spd;
            console.log(searchStr);

            return searchStr.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        });
        return (
            <div className="live-search">
                <SearchForm change={searchTerm => this.setPlayerSearch(searchTerm)} />
                <PlayerList players={players} />

            </div>
        );
    }
}