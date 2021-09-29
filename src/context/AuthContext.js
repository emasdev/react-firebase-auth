import React, { useEffect, useState, createContext } from "react";
import app, { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../components/Loading";

export const Auth = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <Loading />;
  } else {
    return (
      <Auth.Provider value={{ usuario }}>
        {children}
      </Auth.Provider>
    );
  }
};
