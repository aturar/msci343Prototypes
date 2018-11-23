import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./styles.css";

export default function HomePage(props) {
  return (
    <div>
      HomePage
      <button className="pa3" onClick={() => props.history.push("/fileABug")}>
        <i class="material-icons">add</i>
      </button>
    </div>
  );
}
