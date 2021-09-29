import React from "react";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Flex, Box, Spacer, Stack, Button, Text, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";



const Navigation = () => {
  return (

    <Flex p={4}>
      <Heading as="h1">IDM Cloud</Heading>
      <Spacer />

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={4}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Link to={ROUTES.SIGN_IN}>
          <Button>
            Ingresar
          </Button>
        </Link>
        <Link to={ROUTES.SIGN_UP}>
          <Button>
            Registrar
          </Button>
        </Link>

      </Stack>

    </Flex >
  )
}

export default Navigation;