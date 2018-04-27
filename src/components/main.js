import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
// import SearchForm from './search-form';
import * as actiontypes from '../actions/actiontypes';
// import CharacterCount from './character-count';
// import PlayerList from './player-list';
// import PlayerListFirst from './player-list-first';
import { Route, BrowserRouter, Link, Redirect } from 'react-router-dom';
import LiveSearch from './live-search';
import PlayerTest from './player-test';
import LoginForm from './login-form';
import SignupForm from './signup-form';



export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <main>
                    <Route exact path="/signup" component={SignupForm} />
                    <Route exact path="/search" component={PlayerTest} />
                    <Route exact path="/" component={LoginForm} />
                </main>
            </div>
        </BrowserRouter>
    );
}