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
} from "@chakra-ui/react";

import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);
    return;
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Ingresar a IDM
      </Heading>
      {errors.email && (
        <Alert status="error" variant="subtle" mt={6} mb={6}>
          <AlertIcon></AlertIcon>
          {errors.email.type}
        </Alert>
      )}
      {errors.password && (
        <Alert status="error" variant="subtle" mt={6} mb={6}>
          <AlertIcon></AlertIcon>
          {errors.password.type}
        </Alert>
      )}
      {isSubmitSuccessful && (
        <Alert status="success" variant="subtle" mt={6} mb={6}>
          <AlertIcon></AlertIcon>
          Se le ha enviado una confirmación a su correo electronico.
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={6}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message:
                  "El password tiene que tener 6 carácteres por lo menos",
              },
            })}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </GridItem>
  );
};

export default LoginForm;
