import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Spacer, Button, SimpleGrid } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex p={4}>
      <Heading>IDM</Heading>
      <Spacer />
      <SimpleGrid columns={2} spacing={4}>
        <Link to="/login">
          <Button>Ingresar</Button>
        </Link>
        <Link to="/signup">
          <Button>Registrar</Button>
        </Link>
      </SimpleGrid>
    </Flex>
  );
};

export default Nav;
