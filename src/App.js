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
  withState("loggedByMeBugsArray", "setLoggedByMeBugsArray", [
    {
      title: "The navigation bar is broken",
      status: "In-progress",
      priority: "low",
      date: "Wed Nov 22 2018",
      description: "Fix it",
      asignee: "Baraa Baraa",
      issueType: "bug",
    },
  ]),
  withState("loggedByMeFeaturesArray", "setLoggedByMeFeaturesArray", []),
  withState("bugsArray", "setBugsArray", [
    {
      title: "The navigation bar is broken",
      status: "In-progress",
      priority: "low",
      date: "Wed Nov 22 2018",
      description: "Fix it",
      asignee: "Baraa Baraa",
      issueType: "bug"
    },
  ]),
  withState("featuresArray", "setFeaturesArray", [
    {
      title: "Implement navigation",
      status: "In-progress",
      priority: "low",
      date: "Wed Nov 28 2018",
      description: "Fix it",
      asignee: "Baraa Baraa",
      issueType: "feature"
    },
  ]),
  withState("numberOfFeatures", "setNumberOfFeatures", 1),
  withState("numberOfBugs", "setNumberOfBugs", 1),
  withState("loggedByMeFeatures", "setLoggedByMeFeatures", 1),
  withState("loggedByMeNumberOfBugs", "setLoggedByMeNumberOfBugs", 1),
  withHandlers({
    createBug: props => bugObject => {
      if (bugObject.issueType === "bug") {
        props.setNumberOfBugs(props.numberOfBugs + 1);

        if (bugObject.asignee.label === "Baraa Baraa") {
          const tmpBugsArray = Array.from(props.bugsArray);
          tmpBugsArray.push(bugObject);
          props.setBugsArray(tmpBugsArray);
        }

        const loggedByMeArray = Array.from(props.loggedByMeBugsArray);
        loggedByMeArray.push(bugObject);
        props.setLoggedByMeBugsArray(loggedByMeArray);

      } else if (bugObject.issueType === "feature") {
        props.setNumberOfFeatures(props.numberOfFeatures + 1);

        if (bugObject.asignee.label === "Baraa Baraa") {
          const tmpFeaturesArray = Array.from(props.featuresArray);
          tmpFeaturesArray.push(bugObject);
          props.setFeaturesArray(tmpFeaturesArray);
        }
        const featuresByMe = Array.from(props.loggedByMeFeaturesArray);
        featuresByMe.push(bugObject);
        props.setLoggedByMeFeaturesArray(featuresByMe);
      }
    }
  })
)(App);
