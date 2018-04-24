import React from 'react';

export default function LoginForm(props) {
 
    return (
        <form onSubmit={event => event.preventDefault()}>LogIn&emsp;&emsp;&emsp;&emsp;
            {/* <div>LogIn</div> */}
            <label htmlFor="username">Username:</label>&emsp;
            <input 
                aria-controls="user-name"
                type="text" 
                id="username" 
                name="username"
                placeholder="UserName"
            />
            <label for="password">Password:</label>&emsp;
            <input 
                aria-controls="password"
                type="password" 
                id="password" 
                name="password"
                placeholder="PassWord"
            />
        </form>
    );
}