// vendors && utils
import React from 'react';
import { compose } from "recompose"
import { Route, Switch, BrowserRouter } from "react-router-dom"

// pages
import HomePage from "./pages/HomePage"

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <HomePage {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default compose()(App)
