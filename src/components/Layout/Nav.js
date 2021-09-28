import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useAuth } from "../../hooks/useAuth";

const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <Flex>
      <ColorModeSwitcher mr={2} />
      {user && (
        <>
          <Link to="/">
            <Button mr={2}>Dashboard</Button>
          </Link>
          <Button onClick={logout}>Cerrar sesión</Button>
        </>
      )}
      {!user && (
        <>
          <Link to="/login">
            <Button mr={2}>Ingresar</Button>
          </Link>
          <Link to="/signup">
            <Button>Crear usuario</Button>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default Nav;
