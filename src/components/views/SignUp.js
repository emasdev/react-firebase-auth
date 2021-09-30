import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import { useAuth } from "../../hooks/useAuth";

export default function SignUp() {
  const { doCreateUserWithEmailAndPassword } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    doCreateUserWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        console.log("user was created");
        console.log(user);
      })
      .catch((err) => {
        console.error(err.message);
      });

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     resolve();
    //   }, 3000);
    // });
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.nombre}>
          <FormLabel htmlFor="nombre">Nombre</FormLabel>
          <Input
            id="nombre"
            placeholder="nombre"
            {...register("nombre", {
              required: "Este campo es requerido",
              minLength: {
                value: 4,
                message: "Tiene que tener por lo menos 4 caracteres",
              },
            })}
          />
          <FormErrorMessage>
            {errors.nombre && errors.nombre.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.apellidos}>
          <FormLabel htmlFor="apellidos">Apellidos</FormLabel>
          <Input
            id="apellidos"
            placeholder="apellidos"
            {...register("apellidos", {
              required: "Este campo es requerido",
              minLength: {
                value: 4,
                message: "Tiene que tener por lo menos 4 caracteres",
              },
            })}
          />
          <FormErrorMessage>
            {errors.apellidos && errors.apellidos.message}
          </FormErrorMessage>
        </FormControl>
        <Divider />
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="email"
            type="email"
            {...register("email", {
              required: "Este campo es requerido",
              pattern: /^\S+@\S+$/i,
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="password"
            type="password"
            {...register("password", { required: "Este campo es requerido" })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Divider />
        <Button
          mt={4}
          colorScheme="blue"
          isLoading={isSubmitting}
          type="submit"
        >
          Crear nueva cuenta
        </Button>
      </form>
    </Layout>
  );
}
