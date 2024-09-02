"use strict";
"use client";
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
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var theme_1 = require("@/styles/theme");
var react_1 = require("@emotion/react");
var EmotionProvider = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(react_1.ThemeProvider, __assign({ theme: theme_1.theme }, { children: children }));
};
exports.default = EmotionProvider;
