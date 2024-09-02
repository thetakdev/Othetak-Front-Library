"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
var styles_1 = require("@mui/material/styles");
var common_1 = require("./common");
var muiTheme = (0, styles_1.createTheme)({
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
exports.theme = __assign(__assign({}, muiTheme), { colors: common_1.COLORS, checkbox: common_1.CHECKBOX });
