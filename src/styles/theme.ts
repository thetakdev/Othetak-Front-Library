'use client';
import { createTheme } from '@mui/material/styles';
import { CHECKBOX, COLORS } from './common';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6172F3',
      dark: '#3538CD',
    },
    secondary: {
      main: '#A4BCFD',
      light: '#E0EAFF',
    },
    background: {
      default: '#FCFCFC',
    },
    info: {
      main: '#D0D5DD',
      dark: '#667085',
    },
    error: {
      main: '#F04438',
    },
    text: {
      primary: '#101828',
      secondary: '#667085',
    },
  },
  typography: {
    fontFamily: 'Poppins, Spoqa Han Sans Neo, sans-serif',
  },
});


export const theme: any = {
  ...muiTheme,
  colors: COLORS,
  checkbox: CHECKBOX
}