// vendors && utils
import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
// pages
import LoggedByMePage from "./pages/LoggedByMePage";
import FileABugPage from "./pages/FileABugPage";
import ViewBugPage from "./pages/ViewBugPage";
import AssignedToMePage from "./pages/AssignedToMePage";

import "./index.css";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/loggedByMe"
          component={restProps => <LoggedByMePage {...props} {...restProps} />}
        />
        <Route
          exact
          path="/fileABug"
          component={restProps => <FileABugPage {...props} {...restProps} />}
        />
        <Route
          exact
          path="/viewBug"
          component={restProps => <ViewBugPage {...props} {...restProps} />}
        />
        <Route
          exact
          path="/assignedToMePage"
          component={restProps => <AssignedToMePage {...props} {...restProps} />}
        />
      </Switch>
    </div>
  );
}

export default compose(
  withState("bugsArray", "setBugsArray", [
    {
      title: "The navigation bar is broken",
      status: "in-progress",
      priority: "low",
      date: "Wed Nov 22 2018",
      description: "Fix it suka",
      asignee: "Baraa Baraa"
    },
    {
      title: "The navigation bar is broken",
      status: "in-progress",
      priority: "low",
      date: "Tue Oct 20 2018",
      description: "Fix it suka",
      asignee: "Baraa Baraa"
    },
    {
      title: "The navigation bar is broken",
      status: "in-progress",
      priority: "low",
      date: "Mon Jun 20 2018",
      description: "Fix it suka",
      asignee: "Baraa Baraa"
    },
    {
      title: "The navigation bar is broken",
      status: "in-progress",
      priority: "low",
      date: "Sun Sep 20 2018",
      description: "Fix it suka",
      asignee: "Baraa Baraa"
    }
  ]),
  withState("numberOfFeatures", "setNumberOfFeatures", 0),
  withState("numberOfBugs", "setNumberOfBugs", 4),
  withHandlers({
    createBug: props => bugObject => {
      const tmpBugsArray = Array.from(props.bugsArray);
      tmpBugsArray.push(bugObject);
      props.setBugsArray(tmpBugsArray);
      props.setNumberOfBugs(props.numberOfBugs + 1);
    }
  })
)(App);
