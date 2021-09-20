import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Header from "./Header";
import { Layout } from "antd";
import Signup from "./Signup";

const Login = () => {
  const { Content, Footer } = Layout;
  const [signup, setSignup] = useState(false);

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
            height: 450,
            width: 400,
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {!signup ? (
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
              <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
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
                  onClick={() => setSignup}
                >
                  Ingresar
                </Button>
                O
                <Button onClick={() => setSignup(true)} type="link">
                  Registrar Cuenta
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Signup setSignup={setSignup} />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>IDM</Footer>
    </Layout>
  );
};

export default Login;
