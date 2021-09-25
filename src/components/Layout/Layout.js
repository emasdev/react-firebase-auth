import React from "react";
import { Grid } from "@chakra-ui/layout";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Layout = ({ children }) => {
  return (
    <Grid
      minH="100vh"
      templateColumns="repeat(3, 1fr)"
      templateRows="max-content"
      gap={6}
      p={3}
    >
      <ColorModeSwitcher position="absolute" top={3} right={3} />
      {children}
    </Grid>
  );
};

export default Layout;
