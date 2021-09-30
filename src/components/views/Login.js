import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <Heading>Ingresar</Heading>
      <form>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button>Ingresar</Button>
        <Link to="/signin">
          <Button>Crear nueva cuenta</Button>
        </Link>
      </form>
    </Layout>
  );
};

export default Login;
