import React from 'react';
import {connect} from 'react-redux';
import './team.css';



class Team extends React.Component {
    
    state = {
        team: []
    }


    componentDidMount() {
        fetch('http://localhost:8080/team')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                team: res.players
            })
        })
        // .then(team => this.props.dispatch(setTeam(team)))
        .catch(err => console.log(err))
    }

    render() {
        const listHtml = this.state.team.map(p => {
            return (<li> {p.name} </li>)
            // return (<li> {p.name}  <button onClick= {this.deleteElement}> Delete </button></li>)
        })
        return (
            <ul className="myTeamList">
                <h2>TEAM</h2>
                {listHtml}
            </ul>
        );
    }
}

// const mapStateToProps = (state, props) => {
//     console.log(state);
// }

// export default connect(mapStateToProps)(Team);

export default Team;