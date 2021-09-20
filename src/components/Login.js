import React, { useState, useContext, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Header from "./Header";
import { Layout } from "antd";
import Signup from "./Signup";
import IDMFooter from './IDMFooter'
import Error from "./Error";
import { withRouter } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { Auth } from "../context/AuthContext";

const Login = ({ history }) => {
  const { Content } = Layout;
  const [signup, setsignup] = useState(false);
  const { usuario } = useContext(Auth);
  const [error, seterror] = useState('')

  useEffect(() => {
    if (usuario) {
      history.push("/");
    }
  }, [history, usuario]);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        seterror(error.message)
      });

  };



  return (
    <Layout style={{ height: "100vh" }}>
      <Header titulo="IDM Auth" subtitulo="Login con Firebase y ReactJS" />
      <Content
        style={{
          padding: "0 50px",
          marginTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 24,
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {!signup ? (
            <Form
              name="login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}>
              <Form.Item>
                <h3>Acceda a su cuenta de IDM</h3>
              </Form.Item>
              {error ? <Form.Item><Error mensaje={error} /></Form.Item> : null}
              <Form.Item name="email" rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                }, { required: true, message: "Ingrese su email" }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: "Ingrese su contraseña" }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Recordarme</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ marginRight: 10 }}
                >
                  Ingresar
                </Button>
                O
                <Button onClick={() => setsignup(true)} type="link">
                  Registrar Cuenta
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Signup setsignup={setsignup} />
          )}
        </div>
      </Content>
      <IDMFooter />
    </Layout>
  );
};

export default withRouter(Login);
