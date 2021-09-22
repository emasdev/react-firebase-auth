import React, { useState } from 'react';
import {
  Form,
  Input,
  Button
} from 'antd';
import { withRouter } from "react-router"
import Error from './Error';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";


const Signup = ({ setsignup, history }) => {
  const [form] = Form.useForm();
  const [error, seterror] = useState('')

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        //console.log('signed in');        // ...
        const docRef = await setDoc(collection(db, "users"), {
          email: values.email,
          nombre: values.nombre,
          apellidos: values.apellidos,
        });
      })
      .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        seterror(error.message)
      });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      +55
    </Form.Item>
  );




  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item>
          <h3>Registre su cuenta de IDM</h3>
        </Form.Item>
        {error ? <Form.Item><Error mensaje={error} /></Form.Item> : null}
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nombre"
          label="Nombre(s)"
          rules={[
            {
              required: true,
              message: 'Este campo es obligatório.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="apellido"
          label="Apellidos"
          rules={[
            {
              required: true,
              message: 'Este campo es obligatório.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="telefono_fijo"
          label="teléfono Fijo"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Registrar
          </Button>
          O
          <Button onClick={() => setsignup(false)} type="link" type="link">
            Ingresa ahora!
          </Button>
        </Form.Item>
      </Form>
    </>

  );
};

export default withRouter(Signup);