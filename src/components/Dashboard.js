import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import { Layout } from "antd";
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";

const Dashboard = ({ history }) => {
  const { Content, Footer } = Layout;
  const { usuario } = useContext(Auth);
  const [nombre, setnombre] = useState(null);

  useEffect(() => {
    if (usuario === null) {
      history.push("/login");
    }

    usuario ? (usuario.displayName ? setnombre(usuario.displayName) : setnombre(usuario.email)) : setnombre(null);
  }, [history, usuario]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header titulo="IDM Auth" subtitulo="Dashboard" />
      <Content style={{ padding: "0 50px", marginTop: 40 }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: "80vh",
          }}
        >
          Dashbord
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>IDM</Footer>
    </Layout>
  );
};
export default withRouter(Dashboard);
