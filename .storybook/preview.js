import { ChakraProvider } from "@chakra-ui/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import theme from "theme";

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
  mswDecorator,
];
