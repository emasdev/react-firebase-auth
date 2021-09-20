import React from "react";
import { PageHeader, Button } from "antd";
import { auth } from "../firebase";

export default function Header({ titulo, subtitulo }) {
  return (
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)",
      }}
      title={titulo}
      subTitle={subtitulo}
      extra={[
        <Button onClick={() => auth.signOut()} key="logout" type="primary">
          Cerrar Sesión
        </Button>,
      ]}
    />
  );
}
