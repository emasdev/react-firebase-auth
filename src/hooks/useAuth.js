import React, { useState, useEffect, useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Loading from "../components/views/Loading";

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
  const db = getFirestore();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticating(false);
      if (user) {
        console.log("user is in");
        setUser(user);
      } else {
        console.log("no user in");
      }
    });
  }, [auth]);

  const doCreateUserDoc = async (user, data) => {
    let isCreated = false;
    try {
      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: data.nombre,
        apellidos: data.apellidos,
      });
      isCreated = true;
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    return isCreated;
  };

  const doCreateUserWithEmailAndPassword = async (email, password) => {
    let userCredentials = null;
    try {
      userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.error(e);
    }

    return userCredentials.user;
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error.message);
    //     // ..
    //   });
  };

  // The user object and auth methods
  const values = {
    user,
    isAuthenticating,
    doCreateUserWithEmailAndPassword,
    doCreateUserDoc,
  };

  if (isAuthenticating) {
    return <Loading />;
  } else {
    return (
      <AuthContext.Provider value={values}>
        {!isAuthenticating && children}
      </AuthContext.Provider>
    );
  }
};
