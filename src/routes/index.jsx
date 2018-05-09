import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router';
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';
import ContentPage from './ContentPage/ContentPage';

export const history = createBrowserHistory();
history.listen(function(location) {
  ReactGA.pageview(location.pathname + location.search);
});

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <ContentPage />
        </div>
      </Router>
    );
  }
}

export default Routes;
