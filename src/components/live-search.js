import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import SearchForm from './search-form';
import * as actiontypes from '../actions/actiontypes';
// import CharacterCount from './character-count';
import PlayerList from './player-list';
import PlayerListFirst from './player-list-first';
import { Route, Router, Link, Redirect } from 'react-router-dom';
// import LoginForm from './login-form';

class LiveSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            playerData: [],//For API
            searchTerm: '',
            content: undefined//For API
            // isSearch: false//
        }
    }

    /*#####################################################################################################################################################*/
    //Method 1 for API
    componentDidMount() {//access allowed because of class instead of function FOR API
        axios
          .get("https://github.com/alexnoob/BasketBall-GM-Rosters/blob/master/2017-18.NBA.Roster.json")//Can't access because GIthub doesnt allow corss site
          
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

      setStateData(content){
        this.setState({content})
        console.log(this.state.content)
      }

      //Method 2 for API
      componentWillMount(){
        const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean';
        // fetch(url).then(res => res.json()).then(res => this.setState({content: res.results}))
        fetch(url).then(res => res.json()).then(res => this.setStateData(res))
        // fetch(url).then(res => res.json()).then(res => console.log(res))
        // console.log(this.state.content);
      }
      /*#####################################################################################################################################################*/


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
            // console.log('true');
            RealPlayer = PlayerList;
        } else {
            // console.log('false');
            RealPlayer = PlayerListFirst
        }
        // console.log(this.state.playerData);
        const players = this.props.players.filter(player => {//this.state.playerData should be used for api
            let searchStr = player.name + player.ratings[0].pot;
           
            return searchStr.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        });
        return (
            // <Router>//router no props
                <div className="live-search">
                    <p>{this.props.foo}</p>
                    <button onClick={this.props.buttonClicked}>SearchAction</button>
                    {/* <LoginForm /> */}
                    SEARCH NBA PLAYERS
                    <SearchForm change={searchTerm => this.setPlayerSearch(searchTerm)} search={isSearch => this.setIsSearch(isSearch)} /> {/*ignore the isSearch*/}
                    <RealPlayer players={players} />
                    {/* <Route exact path="/players" component={RealPlaye players={players}}/> */}
                </div>
            // </Router>
        );
    }

}

const mapStateToProps = (state) => {
     return {foo: state.foo}
}

const mapDispactchToProps = (dispatch) => {
    return {buttonClicked: ()=>{dispatch({type: actiontypes.BUTTON_CLICKED})}}
}

export default connect(mapStateToProps, mapDispactchToProps)(LiveSearch)