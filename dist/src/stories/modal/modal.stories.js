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
exports.PrimaryModal = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var modal_1 = __importDefault(require("@/components/modal"));
var react_1 = require("react");
var meta = {
    title: "components/Modal/Modal",
    component: modal_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.PrimaryModal = {
    render: function () {
        var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return setVisible(true); } }, { children: "\uBAA8\uB2EC" })), (0, jsx_runtime_1.jsx)(modal_1.default, __assign({ onClose: function () { return setVisible(false); }, open: visible }, { children: "\uB0B4\uC6A9\uB0B4\uC6A9" }))] }));
    },
};
