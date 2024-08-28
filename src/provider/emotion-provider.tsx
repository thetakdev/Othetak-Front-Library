"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";

const EmotionProvider = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EmotionProvider;
