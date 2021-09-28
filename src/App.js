import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout, { CenterLayout } from "./components/Layout/Layout";

import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import PrivateRoute from "./components/routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Layout></Layout>
        </PrivateRoute>
        <Route path="/login">
          <CenterLayout>
            <LoginForm />
          </CenterLayout>
        </Route>
        <Route path="/signup">
          <Layout>
            <SignupForm />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
