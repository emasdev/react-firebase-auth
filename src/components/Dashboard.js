import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import { Layout } from "antd";
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";
import FooterContent from "./FooterContent";

const Dashboard = ({ history }) => {
  const { Content, Footer } = Layout;
  const { user } = useContext(Auth);
  const [nombre, setnombre] = useState(null);

  useEffect(() => {
    if (user === null) {
      history.push("/login");
    }

    user ? (user.displayName ? setnombre(user.displayName) : setnombre(user.email)) : setnombre(null);
  }, [history, user]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header titulo="IDM Auth" subtitulo="Dashboard" />
      <Content style={{ padding: "0 50px", marginTop: 40 }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: "80vh"
          }}
        >
          Hola {nombre}
        </div>
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
};
export default withRouter(Dashboard);
