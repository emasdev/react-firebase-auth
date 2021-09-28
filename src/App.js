import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout, { CenterLayout } from "./components/Layout/Layout";

import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

const App = () => {
  return (
    <Router>
      <Switch>
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
