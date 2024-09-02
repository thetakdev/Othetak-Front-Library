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
exports.CustomAccordionDetails = exports.CustomAccordionSummary = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var material_1 = require("@mui/material");
var styled_1 = __importDefault(require("@emotion/styled"));
var image_1 = __importDefault(require("next/image"));
function Accordion(_a) {
    var open = _a.open, _b = _a.square, square = _b === void 0 ? true : _b, style = _a.style, summary = _a.summary, details = _a.details, _c = _a.defaultExpanded, defaultExpanded = _c === void 0 ? true : _c;
    return ((0, jsx_runtime_1.jsxs)(CustomAccordion, __assign({ disableGutters: true, square: square, defaultExpanded: defaultExpanded, expanded: open, style: style }, { children: [(0, jsx_runtime_1.jsx)(exports.CustomAccordionSummary, __assign({ expandIcon: (0, jsx_runtime_1.jsx)(image_1.default, { src: "https://image.thetak.net/asset/product/images/arrow_down_gray_25.svg", alt: "accordion-arrow", width: 15, height: 15 }) }, { children: (0, jsx_runtime_1.jsx)(SummaryContainer, { children: summary }) })), details] })));
}
exports.default = Accordion;
var CustomAccordion = (0, styled_1.default)(material_1.Accordion)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  box-shadow: none;\n\n  ::before {\n    height: 0px;\n  }\n"], ["\n  background-color: transparent;\n  box-shadow: none;\n\n  ::before {\n    height: 0px;\n  }\n"])));
exports.CustomAccordionSummary = (0, styled_1.default)(material_1.AccordionSummary)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & .MuiAccordionSummary-content {\n    margin: 0;\n  }\n\n  &.MuiAccordionSummary-root {\n    padding: 0;\n    min-height: 0;\n  }\n\n  &.Mui-focusVisible {\n    background-color: transparent;\n  }\n  .MuiAccordionSummary-expandIconWrapper {\n    margin-right: 24px !important;\n  }\n"], ["\n  & .MuiAccordionSummary-content {\n    margin: 0;\n  }\n\n  &.MuiAccordionSummary-root {\n    padding: 0;\n    min-height: 0;\n  }\n\n  &.Mui-focusVisible {\n    background-color: transparent;\n  }\n  .MuiAccordionSummary-expandIconWrapper {\n    margin-right: 24px !important;\n  }\n"])));
var SummaryContainer = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: default;\n"], ["\n  cursor: default;\n"])));
exports.CustomAccordionDetails = (0, styled_1.default)(material_1.AccordionDetails)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &.MuiAccordionDetails-root {\n    padding: 0;\n  }\n"], ["\n  &.MuiAccordionDetails-root {\n    padding: 0;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
