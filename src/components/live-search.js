import React from 'react';
import ApiData from './api-data';
import SearchForm from './search-form';
// import CharacterCount from './character-count';
import PlayerList from './player-list';
import PlayerListFirst from './player-list-first';

export default class LiveSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
            // isSearch: false//
        }
    }

    setPlayerSearch(searchTerm) {
        this.setState({searchTerm})  
    }

    // setIsSearch(bool) {//
    //     this.setState(
    //         {isSearch: bool}
    //     )  
    // }

    getData(data) {
        this.setState({data})
    }


    render() {
        let RealPlayer;
        // if(this.state.isSearch === true){console.log('true')}else if(this.state.isSearch === false || this.state.isSearch === ''){console.log('false')}
        if(this.state.searchTerm.length > 0) {
            console.log('true');
            RealPlayer = PlayerList;
        } else {
            console.log('false');
            RealPlayer = PlayerListFirst
        }

        const players = this.props.players.filter(player => {
            let searchStr = player.name + player.ratings[0].pot;
           
            return searchStr.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        });
        return (
            <div className="live-search">
                SEARCH NBA PLAYERS
                <ApiData dataform={data => this.getData(data)}/>
                <SearchForm change={searchTerm => this.setPlayerSearch(searchTerm)} search={isSearch => this.setIsSearch(isSearch)} /> {/*ignore the isSearch*/}
                <RealPlayer players={players} />
            </div>
        );
    }
}