"use client";
import { createTheme } from "@mui/material/styles";
import { deepPurple, lightGreen } from "@mui/material/colors";
import { LinkProps } from "@mui/material";
import { LinkBehavior } from "@/Components/Root/LinkBehaviour";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        color: "inherit",
        underline: "none",
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: deepPurple,
        secondary: lightGreen,
      },
    },
    light: {
      palette: {
        primary: deepPurple,
        secondary: lightGreen,
      },
    },
  },
});

export default theme;
