import React from 'react';
import axios from 'axios';
import SearchForm from './search-form';
// import CharacterCount from './character-count';
import PlayerList from './player-list';
import PlayerListFirst from './player-list-first';

export default class LiveSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            playerData: [],
            searchTerm: ''
            // isSearch: false//
        }
    }

    componentDidMount() {//access allowed because of class instead of function FOR API
        axios
          .get("https://github.com/alexnoob/BasketBall-GM-Rosters/blob/master/2017-18.NBA.Roster.json")
          
          .then(response => {
    
            // create an array of contacts only with relevant data
            const newPlayerData = response.data.map(p => {
              return {
                name: p.name || p.firstName,
                pos: p.pos,
                ratings: p.ratings,
                imgURL: p.imgURL
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              playerData: newPlayerData
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
          .catch(error => console.log(error));
      }

    setPlayerSearch(searchTerm) {
        this.setState({searchTerm})  
    }

    // setIsSearch(bool) {//
    //     this.setState(
    //         {isSearch: bool}
    //     )  
    // }



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
        console.log(this.state.playerData);
        const players = this.props.players.filter(player => {//this.state.playerData should be used for api
            let searchStr = player.name + player.ratings[0].pot;
           
            return searchStr.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        });
        return (
            <div className="live-search">
                SEARCH NBA PLAYERS
                <SearchForm change={searchTerm => this.setPlayerSearch(searchTerm)} search={isSearch => this.setIsSearch(isSearch)} /> {/*ignore the isSearch*/}
                <RealPlayer players={players} />
            </div>
        );
    }
}