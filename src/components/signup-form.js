import React from 'react';
import {signup} from '../actions/auth.js';
import {connect} from 'react-redux';

class SignUpForm extends React.Component {

    state = {
        username: null,
        password: null
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>LogIn&emsp;&emsp;&emsp;&emsp;
                {/* <div>LogIn</div> */}
                <label htmlFor="username">Username:</label>&emsp;
                <input 
                    onChange={this.handleChange}
                    aria-controls="user-name"
                    type="text" 
                    id="username" 
                    name="username"
                    placeholder="UserName"
                />
                <label for="password">Password:</label>&emsp;
                <input 
                    onChange={this.handleChange}
                    aria-controls="password"
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="PassWord"
                />
    
                <button onClick={() => this.props.onSignup(this.state.username, this.state.password)}>SignUp</button>
            </form>
        );
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        onSignup: (username, password) => dispatch(signup(username, password))
    }
}


export default connect(null, mapDispatchToProps)(SignUpForm)