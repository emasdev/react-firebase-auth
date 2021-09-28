import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Alert,
  AlertIcon,
  SimpleGrid
} from '@chakra-ui/react';
import { useHistory } from 'react-router';

import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

export default function SignupForm() {

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
    <Center>
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>Registrar nueva cuenta IDM</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            y obtenga grandes beneficios
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {errors.size > 0 && (
              <Alert status="error" variant="subtle" mt={6} mb={6}>
                <AlertIcon>{errors.email.message}</AlertIcon>
                <AlertIcon>{errors.password.message}</AlertIcon>
                <AlertIcon>{errors.cpassword.message}</AlertIcon>


              </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid columns={2} spacing={5}>
                <FormControl id="nombre" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    placeholder="Nombre(s)"
                    {...register("nombre", {
                      required: { value: true, message: "Es necesario escribir su nombre" },
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </FormControl>
                <FormControl id="apellidos" isRequired>
                  <FormLabel>Apellidos</FormLabel>
                  <Input
                    placeholder="Apellidos"
                    {...register("apellidos", {
                      required: { value: true, message: "Es necesario escribir sus apellidos" },
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </FormControl>
              </SimpleGrid>
              <FormControl id="email" mt={2} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "Es necesario escribir un email asociado a su cuenta IDM" },
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </FormControl>
              <SimpleGrid columns={2} spacing={5}>
                <FormControl id="password" mt={3} isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: { value: true, message: "Es necesario escribir un password correcto" },
                      minLength: {
                        value: 6,
                        message:
                          "El password tiene que tener 6 carácteres por lo menos",
                      },
                    })}
                  />
                </FormControl>
                <FormControl id="cpassword" mt={3} isRequired>
                  <FormLabel>Comfirmar password</FormLabel>
                  <Input
                    name="cpassword"
                    placeholder="Comfirmar password"
                    type="password"
                    {...register("cpassword", {
                      required: { value: true, message: "Es necesario escribir un password correcto" },
                      minLength: {
                        value: 6,
                        message:
                          "El password tiene que tener 6 carácteres por lo menos",
                      },
                    })}
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={2} spacing={5}>
                <FormControl id="telefono" mt={3} isRequired>
                  <FormLabel>Teléfono movil</FormLabel>
                  <Input
                    name="telefono"
                    placeholder="Teléfono"
                    type="tel"
                    {...register("telefono", {
                      required: { value: true, message: "Es necesario escribir un teléfono correcto" },
                      minLength: {
                        value: 9,
                        message:
                          "El teléfono tiene que tener 10 numeros por lo menos",
                      },
                      maxLength: {
                        value: 10,
                        message:
                          "El teléfono tiene que tener 10 numeros máximo",
                      }
                    })}
                  />
                </FormControl>

              </SimpleGrid>
              <Stack spacing={10} mt={4}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Aceptar terminos y condiciones</Checkbox>
                  <Link color={'blue.400'}>ver terminos y condiciones</Link>
                </Stack>
                <Button
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Registrar
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}