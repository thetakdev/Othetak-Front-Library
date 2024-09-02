"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = exports.DescriptionContainer = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var material_1 = require("@mui/material");
exports.DescriptionContainer = (0, styled_1.default)(material_1.Grid)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  border-color: ", ";\n  border-collapse: collapse;\n\n  &::after {\n    display: ", ";\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.05) !important;\n  }\n\n  .loader {\n    display: ", ";\n  }\n"], ["\n  position: relative;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  border-color: ", ";\n  border-collapse: collapse;\n\n  &::after {\n    display: ", ";\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.05) !important;\n  }\n\n  .loader {\n    display: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.mainColor.main;
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? "block" : "none");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? "block" : "none !important");
});
exports.Description = (0, styled_1.default)(material_1.Grid)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n\n  border-collapse: collapse;\n  /* &:last-child&:not(:first-child) {\n    border-bottom: none;\n  } */\n\n  &.noBorder {\n    border-bottom: none;\n  }\n\n  & > label {\n    border-collapse: collapse;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    padding-right: 10px;\n    min-height: 48px;\n    height: 100%;\n    color: ", ";\n    font-size: 16px;\n    font-weight: 500;\n    background-color: ", ";\n    width: 110px;\n  }\n  .require:after {\n    content: \"*\";\n    color: ", ";\n    margin-left: 2px;\n  }\n\n  .content {\n    display: flex;\n    align-items: center;\n    flex: 1;\n    background: white;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"], ["\n  display: flex;\n  border-bottom: 1px solid ", ";\n\n  border-collapse: collapse;\n  /* &:last-child&:not(:first-child) {\n    border-bottom: none;\n  } */\n\n  &.noBorder {\n    border-bottom: none;\n  }\n\n  & > label {\n    border-collapse: collapse;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    padding-right: 10px;\n    min-height: 48px;\n    height: 100%;\n    color: ", ";\n    font-size: 16px;\n    font-weight: 500;\n    background-color: ", ";\n    width: 110px;\n  }\n  .require:after {\n    content: \"*\";\n    color: ", ";\n    margin-left: 2px;\n  }\n\n  .content {\n    display: flex;\n    align-items: center;\n    flex: 1;\n    background: white;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.mainColor.main3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.mainColor.main1;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.errorColor.errorMain;
});
var templateObject_1, templateObject_2;
