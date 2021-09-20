import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Loading from "../components/Loading";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      setUsuario(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <Loading />;
  } else {
    return (
      <Auth.Provider
        value={{
          usuario,
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
