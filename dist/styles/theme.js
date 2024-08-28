"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var _styles = require("@mui/material/styles");
var _common = require("./common");
const muiTheme = (0, _styles.createTheme)({
  palette: {
    mode: 'light',
    primary: {
      main: '#6172F3',
      dark: '#3538CD'
    },
    secondary: {
      main: '#A4BCFD',
      light: '#E0EAFF'
    },
    background: {
      default: '#FCFCFC'
    },
    info: {
      main: '#D0D5DD',
      dark: '#667085'
    },
    error: {
      main: '#F04438'
    },
    text: {
      primary: '#101828',
      secondary: '#667085'
    }
  },
  typography: {
    fontFamily: 'Poppins, Spoqa Han Sans Neo, sans-serif'
  }
});
const theme = exports.theme = {
  ...muiTheme,
  colors: _common.COLORS,
  checkbox: _common.CHECKBOX
};