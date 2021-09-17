import React, { Component } from "react";
import { withRouter } from "react-router";
import { withFirebase } from "../Firebase";

class SignIn extends Component {
  render() {
    return <div>Hola</div>;
  }
}

const SignInWithRouter = withRouter(withFirebase(SignIn));

export default SignInWithRouter;
