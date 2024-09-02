"use strict";
'use client';
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var common_1 = require("@/styles/common");
var styled_1 = __importDefault(require("@emotion/styled"));
function Modal(_a) {
    var open = _a.open, onClose = _a.onClose, style = _a.style, _b = _a.hideBackdrop, hideBackdrop = _b === void 0 ? false : _b, _c = _a.isClose, isClose = _c === void 0 ? true : _c, _d = _a.closeSize, closeSize = _d === void 0 ? 24 : _d, closeStyle = _a.closeStyle, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(material_1.Modal, __assign({ open: open, onClose: onClose, hideBackdrop: hideBackdrop }, { children: (0, jsx_runtime_1.jsxs)(EContainer, __assign({ style: style }, { children: [isClose && ((0, jsx_runtime_1.jsx)(image_1.default, { className: "close", src: 'https://image.thetak.net/asset/product/images/x_close_gray_2.svg', alt: "close", width: closeSize, height: closeSize, onClick: onClose, style: closeStyle })), children] })) })));
}
exports.default = Modal;
var EContainer = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px;\n  background-color: ", ";\n  border-radius: 8px;\n  border: 1px solid ", ";\n\n  :focus {\n    outline: none;\n  }\n\n  .close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px;\n  background-color: ", ";\n  border-radius: 8px;\n  border: 1px solid ", ";\n\n  :focus {\n    outline: none;\n  }\n\n  .close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n  }\n"])), function (_a) {
    var style = _a.style;
    return ((style === null || style === void 0 ? void 0 : style.top) ? style.top : '50%');
}, common_1.COLORS.grayScale.white, common_1.COLORS.grayScale.gray3);
var templateObject_1;
