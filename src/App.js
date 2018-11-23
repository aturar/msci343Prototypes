// vendors && utils
import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
// pages
import HomePage from "./pages/HomePage";
import AssignedToMePage from "./pages/AssignedToMePage";
import CreateBugPage from "./pages/CreateBugPage";
import LoggedByMePage from "./pages/LoggedByMePage";
import MyFavouritesPage from "./pages/MyFavouritesPage";
import FileABugPage from "./pages/FileABugPage";

import "./index.css";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/assignedToMe"
          component={restProps => (
            <AssignedToMePage {...props} {...restProps} />
          )}
        />
        <Route
          exact
          path="/createBug"
          component={restProps => <CreateBugPage {...props} {...restProps} />}
        />
        <Route
          exact
          path="/loggedByMe"
          component={restProps => <LoggedByMePage {...props} {...restProps} />}
        />
        <Route
          exact
          path="/myFavourites"
          component={restProps => (
            <MyFavouritesPage {...props} {...restProps} />
          )}
        />
        <Route
          exact
          path="/fileABug"
          component={restProps => <FileABugPage {...props} {...restProps} />}
        />
        <Route
          component={restProps => <HomePage {...props} {...restProps} />}
        />
      </Switch>
    </div>
  );
}

export default compose(
  withState("bugsArray", "setBugsArray", []),
  withState("numberOfFeatures", "setNumberOfFeatures", 0),
  withState("numberOfBugs", "setNumberOfBugs", 0),
  withHandlers({
    createBug: props => bugProps => {
      console.log(props);
      console.log(bugProps);
    }
  })
)(App);
