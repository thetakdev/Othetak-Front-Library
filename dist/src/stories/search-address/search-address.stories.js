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
exports.PrimarySearchAddress = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var search_address_1 = __importDefault(require("@/components/search-address"));
var react_1 = require("react");
var meta = {
    title: "components/SearchAddress/SearchAddress",
    component: search_address_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.PrimarySearchAddress = {
    render: function () {
        var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
        var handleSelectAddress = function (data) {
            console.log("data", data);
        };
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return setVisible(true); } }, { children: "\uC8FC\uC18C\uAC80\uC0C9" })), (0, jsx_runtime_1.jsx)(search_address_1.default, { open: visible, onClose: function () { return setVisible(false); }, onSelect: handleSelectAddress })] }));
    },
};
