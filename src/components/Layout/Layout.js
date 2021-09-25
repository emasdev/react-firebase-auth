import React from "react";
import { Grid } from "@chakra-ui/layout";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <Grid
      minH="100vH"
      templateColumns="repeat(3, 1fr)"
      templateRows="max-content"
      gap={6}
      p={3}
    >
      <Nav />
      <ColorModeSwitcher position="absolute" top={3} right={3} />
      <p>Hola</p>
      {children}
    </Grid>
  )
}

export default Layout;