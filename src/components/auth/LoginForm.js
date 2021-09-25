import React from "react";
import { useForm } from "react-hook-form";

import {
  Heading,
  GridItem,
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const { handleSubmit, register, errors, setError, formState } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Login
      </Heading>
      {/* {errors.email && (
        <Alert status="error" variant="subtle" mt={6} mb={6}>
          <AlertIcon></AlertIcon>
          {errors.email.message}
        </Alert>
      )} */}
      {formState.isSubmitSuccessful && (
        <Alert status="success" variant="subtle" mt={6} mb={6}>
          <AlertIcon></AlertIcon>
          Usuario creado
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input name="email" placeholder="Email" {...register("email")} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            name="password"
            placeholder="Password"
            {...register("password")}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </GridItem>
  );
};

export default LoginForm;
