import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actiontypes from '../actions/actiontypes';
import { Route, BrowserRouter, Link, Redirect } from 'react-router-dom';
import LiveSearch from './live-search';
import PlayerTest from './player-test';
import Team from './team';
import './main.css';



export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <nav className="nav">
                    <Link className="playersMain" to='/players'>Players</Link>
                    <Link className="teamMain" to='/'>My Team</Link>
                </nav>
                <main>
                    <Route exact path="/players" component={PlayerTest} />
                    <Route exact path="/" component={Team} />
                </main>
            </div>
        </BrowserRouter>
    );
}