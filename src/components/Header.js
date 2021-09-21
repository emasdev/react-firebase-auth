import React, { useContext } from "react";
import { PageHeader, Button } from "antd";
import { auth } from "../firebase";
import { Auth } from "../context/AuthContext";


export default function Header({ titulo, subtitulo }) {

  const { user } = useContext(Auth);

  const CloseSessionBtn = () => {
    if (user) {
      return (<Button onClick={() => auth.signOut()} key="logout" type="primary">
        Cerrar Sesión
      </Button>);
    } else {
      return (<></>)
    }

  }

  return (
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)",
      }}
      title={titulo}
      subTitle={subtitulo}
      extra={[
        <CloseSessionBtn />
      ]}
    />
  );
}
