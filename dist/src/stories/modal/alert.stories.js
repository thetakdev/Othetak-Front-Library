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
exports.PrimaryAlert = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var alert_1 = __importDefault(require("@/components/alert"));
var react_1 = require("react");
var meta = {
    title: "components/Modal/Alert",
    component: alert_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.PrimaryAlert = {
    render: function () {
        var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return setVisible(true); } }, { children: "\uC5BC\uB7FF\uC5F4\uAE30" })), (0, jsx_runtime_1.jsx)(alert_1.default, { title: "\uD0C0\uC774\uD2C0", subTitle: "\uC11C\uBE0C\uD0C0\uC774\uD2C0", onCancel: function () { return setVisible(false); }, onConfirm: function () { return setVisible(false); }, open: visible })] }));
    },
};
