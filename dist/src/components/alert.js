"use strict";
"use client";
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
var common_1 = require("@/styles/common");
var styled_1 = __importDefault(require("@emotion/styled"));
var button_1 = __importDefault(require("@/components/button"));
function Alert(_a) {
    var open = _a.open, title = _a.title, subTitle = _a.subTitle, _b = _a.cancelText, cancelText = _b === void 0 ? "닫기" : _b, _c = _a.confirmText, confirmText = _c === void 0 ? "확인" : _c, bottomContent = _a.bottomContent, _d = _a.hideBottomContent, hideBottomContent = _d === void 0 ? false : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, onCancel = _a.onCancel, onConfirm = _a.onConfirm;
    return ((0, jsx_runtime_1.jsx)(E_Modal, __assign({ open: open }, { children: (0, jsx_runtime_1.jsxs)(E_Container, { children: [title && (0, jsx_runtime_1.jsx)("span", __assign({ className: "title" }, { children: title })), subTitle && (0, jsx_runtime_1.jsx)("span", __assign({ className: "subTitle" }, { children: subTitle })), hideBottomContent === false && ((0, jsx_runtime_1.jsx)(E_ButtonWrapper, { children: bottomContent ? (bottomContent) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(button_1.default, __assign({ variant: "secondary", onClick: onCancel, style: BUTTON_STYLE }, { children: cancelText })), (0, jsx_runtime_1.jsx)(button_1.default, __assign({ isLoading: isLoading, onClick: onConfirm, style: BUTTON_STYLE }, { children: confirmText }))] })) }))] }) })));
}
exports.default = Alert;
var E_Modal = (0, styled_1.default)(material_1.Modal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 9999;\n"], ["\n  z-index: 9999;\n"])));
var E_Container = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 308px;\n  padding: 32px 80px;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow:\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03),\n    0px 12px 18px -4px rgba(16, 24, 40, 0.08);\n\n  &:focus {\n    outline: none;\n  }\n\n  .title {\n    color: ", ";\n    font-size: 24px;\n    font-weight: 700;\n    line-height: normal;\n    text-align: center;\n    white-space: pre-wrap;\n  }\n\n  .subTitle {\n    margin-top: 20px;\n    color: ", ";\n    font-size: 16px;\n    font-weight: 500;\n    line-height: normal;\n    text-align: center;\n    white-space: pre-wrap;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 308px;\n  padding: 32px 80px;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow:\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03),\n    0px 12px 18px -4px rgba(16, 24, 40, 0.08);\n\n  &:focus {\n    outline: none;\n  }\n\n  .title {\n    color: ", ";\n    font-size: 24px;\n    font-weight: 700;\n    line-height: normal;\n    text-align: center;\n    white-space: pre-wrap;\n  }\n\n  .subTitle {\n    margin-top: 20px;\n    color: ", ";\n    font-size: 16px;\n    font-weight: 500;\n    line-height: normal;\n    text-align: center;\n    white-space: pre-wrap;\n  }\n"])), common_1.COLORS.grayScale.white, common_1.COLORS.grayScale.black, common_1.COLORS.grayScale.gray2);
var E_ButtonWrapper = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 32px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 32px;\n"])));
var BUTTON_STYLE = {
    width: "106px",
    height: "36px",
};
var templateObject_1, templateObject_2, templateObject_3;
