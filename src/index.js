import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './routes';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactGA.initialize('UA-112745741-2', { debug: false });
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root')
);
