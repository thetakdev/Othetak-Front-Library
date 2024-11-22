// theme.d.ts
import "styled-components";
import { Theme as MuiTheme } from "@mui/material/styles";
import "@emotion/react";
import { CHECKBOX, COLORS, IMAGE, TABLE } from "./common"; // COLORS 파일의 정확한 경로로 수정

import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    colors: typeof COLORS;
    checkbox: typeof CHECKBOX;
    image: typeof IMAGE;
    table: typeof TABLE;
  }
}

declare module "styled-components" {
  export interface DefaultTheme extends MuiTheme {}
}
