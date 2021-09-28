import React, { useState, useEffect, useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
};

initializeApp(config);
const AuthContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticating(false);
      if (user) {
        console.log("user is in");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //const uid = user.uid;
        setUser(user);
      } else {
        console.log("no user in");
      }
    });
  }, [auth]);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged In
        const user = userCredential.user;
        setUser(user);
        return user;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        return user;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const sendPasswordResetEmail = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };

  const confirmPasswordReset = (code, password) => {
    confirmPasswordReset(auth, code, password)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };

  // The user object and auth methods
  const values = {
    user,
    isAuthenticating,
    login,
    signup,
    logout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };

  // Provider component that wraps your app and makes auth object
  // ... available to any child component that calls useAuth().
  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
