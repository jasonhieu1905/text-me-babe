import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./User";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <User />
      </Route>
      <Route path="/chatbox">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
