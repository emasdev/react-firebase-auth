import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    initializeApp(config);

    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(
          `${user.email} is signed in and verifided: ${user.emailVerified}`
        );
      } else {
        console.log("user is signed out");
        // User is signed out
        // ...
      }
    });
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        return new Promise((resolve, reject) => {
          resolve(user); // ¡Todo salió bien!
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(getAuth(), email, password);

  doSignOut = () => signOut(getAuth());

  doPasswordReset = (email) => sendPasswordResetEmail(getAuth(), email);

  doPasswordUpdate = (password) => updatePassword(getAuth(), password);
}

export default Firebase;
