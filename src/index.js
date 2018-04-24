import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import './App.css';
import players from './players.json';
import LiveSearch from './components/live-search';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

// let images = new Array()
//     let imageUrlArray = [];
//     players.forEach((player) => {
//         imageUrlArray.push(player.imgURL)
//     })
//     function preload(array) {
//         for (let i = 0; i < array.length; i++) {
//             images[i] = new Image()
//             images[i].src = array[i]
//         }
//     }
//     preload(
//         imageUrlArray
//     )

ReactDOM.render(
    <Provider store={store}>
        <LiveSearch players={players} />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
