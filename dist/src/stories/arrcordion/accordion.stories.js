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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion_1 = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var accordion_1 = __importDefault(require("@/components/accordion"));
var meta = {
    title: "components/Accordion/Accordion",
    component: accordion_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Accordion_1 = {
    render: function () {
        return ((0, jsx_runtime_1.jsx)(accordion_1.default, { summary: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "header" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "circle" }), (0, jsx_runtime_1.jsx)("b", __assign({ className: "dot" }, { children: "\uAE30\uBCF8 \uAD00\uB9AC" }))] })), details: (0, jsx_runtime_1.jsx)("div", __assign({ style: { background: "#EEEEEE" } }, { children: "\uB0B4\uC6A9\uB0B4\uC6A9" })) }));
    },
};
