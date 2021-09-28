import React from "react";
import { Grid, Heading, Spacer, Flex, Box, useColorModeValue, Text } from "@chakra-ui/react";
import Nav from "./Nav";

const CenterLayout = ({ children }) => {
  return (
    <Grid
      minH="100vh"
      templateColumns="1fr"
      templateRows="80px 1fr 40px"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Flex p={4} alignItems="center">

        <Heading size="md">IDM Cloud</Heading>
        <Spacer />
        <Nav />
      </Flex>
      {children}
      <Flex justifyContent="center">
        <Text>Powered by Dentalogique</Text>
      </Flex>
    </Grid>
  );
};

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Flex p={4} alignItems="center">

        <Heading size="md">IDM Cloud</Heading>
        <Spacer />
        <Nav />
      </Flex>
      {children}
      <Flex justifyContent="center" position="absolute" bottom={5} minWidth="100%">
        <Text>Powered by Dentalogique</Text>
      </Flex>
    </Box>
  )
};

export default Layout;
export { CenterLayout };
