import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Error from "./Error";
import { AuthContext } from "../context/AuthContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const App = () => (
  <AuthContext>
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </AuthContext>
);

export default App;
