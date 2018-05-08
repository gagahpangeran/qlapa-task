import React, { Component } from "react";
import { Route, Switch, Router } from "react-router";
import ReactGA from "react-ga";
import createBrowserHistory from "history/createBrowserHistory";
import ContentPage from "./ContentPage/ContentPage";

const ROUTES = [
  {
    title: "App",
    id: "app",
    route: {
      exact: true,
      path: "/",
      component: ContentPage
    }
  }
];

export const history = createBrowserHistory();
history.listen(function(location) {
  ReactGA.pageview(location.pathname + location.search);
});

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            {ROUTES.map(item => <Route key={item.id} {...item.route} />)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
