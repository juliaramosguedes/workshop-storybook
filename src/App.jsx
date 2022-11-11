import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/inter/600.css";

import theme from "theme";
import { FormLogin } from "./modules";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent maxW="md" mt={12}>
        <FormLogin />
      </Container>
    </ChakraProvider>
  );
}

export default App;
