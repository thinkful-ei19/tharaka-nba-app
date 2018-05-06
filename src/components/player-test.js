import React from 'react';
import LiveSearch from './live-search';
import {setPlayers} from '../actions/all-players';
import {connect} from 'react-redux';

export class PlayerTest extends React.Component {

    componentDidMount() {
        // fetch('http://localhost:8080/players')
        fetch('https://nba-app-tharaka.herokuapp.com/players')
        .then(res => res.json())
        .then(players => this.props.dispatch(setPlayers(players)))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <LiveSearch className='liveSearch' players= {this.props.players} />
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        players: state.players
    }
}


export default connect(mapStateToProps)(PlayerTest)