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
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const SigninForm = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const { signup } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password);
      history.push("/");
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
        Registrar nuevo usuario de IDM
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
        <FormControl mb={6} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </FormControl>
        <FormControl mb={6} isRequired>
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
        <FormControl mb={6} isRequired>
          <FormLabel htmlFor="password">Comfirmar Password</FormLabel>
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

export default SigninForm;
