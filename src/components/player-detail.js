import React from 'react';

export default class PlayerDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            imageLoaded: false,
            image: null
        }
    }
    
    componentDidMount() {
        
    }

    imageLoaded() {
        this.setState({imageLoaded: true})
    }

    render() {
        return (<li>
            <strong>{this.props.player.name}</strong> {this.props.player.pos} <br></br>
            <span>Speed: {this.props.player.ratings[0].spd}</span> <br></br>
            <span>Strength: {this.props.player.ratings[0].stre}</span> <br></br>
            <span>Field Goal: {this.props.player.ratings[0].fg}</span> <br></br>
            <span>Three Point: {this.props.player.ratings[0].tp}</span> <br></br>
            <span>Free Throws: {this.props.player.ratings[0].ft}</span> <br></br>
            <span>Rebounds: {this.props.player.ratings[0].reb}</span> <br></br>
            <span>Handles: {this.props.player.ratings[0].drb}</span> <br></br>
            <span>Assist: {this.props.player.ratings[0].pss}</span> <br></br>
            <span>Offense: {this.props.player.ratings[0].pot}</span> <br></br>
            <span>Defense: {this.props.player.ratings[0].diq}</span> <br></br>

            {/* Loader until image loads */}
            <div>
                {!this.state.imageLoaded &&
                    // <img src={this.props.player.imgURL} alt={`picture`} onLoad={() => {this.imageLoaded()}}/>
                    
                    <div className='loader'></div>

                }
             <img src={this.props.player.imgURL} alt={`picture`} onLoad={() => {this.imageLoaded()}} style={{display: this.state.imageLoaded ? 'block' : 'none'}}/> 
          
            </div> <br></br>
        </li>)
    }
}