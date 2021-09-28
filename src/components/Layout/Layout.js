import React from "react";
import { Grid, Heading, Spacer, Flex } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Grid
      minH="100vh"
      templateColumns="1fr"
      templateRows="80px 1fr"
    >
      <Flex p={4} alignItems="center">

        <Heading size="md">IDM Cloud</Heading>
        <Spacer />
        <Nav />
      </Flex>
      {children}

    </Grid>
  );
};

export default Layout;
