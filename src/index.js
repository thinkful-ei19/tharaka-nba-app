import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import players from './players.json';
import LiveSearch from './components/live-search';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LiveSearch players={players} />, document.getElementById('root')
);
registerServiceWorker();
