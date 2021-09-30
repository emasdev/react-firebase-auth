import { Box } from "@chakra-ui/react";
import React from "react";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" bgGradient="linear(to-r, blue.200, blue.500)">
      <Nav />
      {children}
    </Box>
  );
};

export default Layout;
