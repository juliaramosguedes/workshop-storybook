import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      heading: {
        fontWeight: 600,
      },
    },
  },
});

export default theme;
