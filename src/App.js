import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout, { CenterLayout } from "./components/Layout/Layout";

import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Layout>
              <div>Loading</div>
            </Layout>
          </Route>
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
      </AuthProvider>
    </Router>
  );
};

export default App;
