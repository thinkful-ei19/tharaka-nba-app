import React from 'react';
import LiveSearch from './live-search';
import {getPlayers} from '../actions/set-players';
import {connect} from 'react-redux';

export class PlayerTest extends React.Component {

    componentDidMount() {
        this.props.dispatch(getPlayers()) 
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