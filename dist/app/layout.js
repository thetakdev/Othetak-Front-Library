"use strict";
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
exports.metadata = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
function RootLayout(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("html", __assign({ lang: "en" }, { children: (0, jsx_runtime_1.jsx)("body", { children: children }) })));
}
exports.default = RootLayout;
