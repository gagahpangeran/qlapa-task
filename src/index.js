import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './routes';
import './styles/index.css';

ReactGA.initialize('UA-112745741-2', { debug: false });
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
