import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import LoginForm from "./components/auth/LoginForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
