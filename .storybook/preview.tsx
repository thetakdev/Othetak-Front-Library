import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { theme } from "../src/styles/theme";

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
