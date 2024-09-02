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
exports.Checkbox = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var styled_1 = __importDefault(require("@emotion/styled"));
// eslint-disable-next-line react/display-name
exports.Checkbox = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, _b = _a.shape, shape = _b === void 0 ? "square" : _b, _c = _a.size, size = _c === void 0 ? "20px" : _c, gap = _a.gap, style = _a.style, _d = _a.checked, checked = _d === void 0 ? false : _d, onChange = _a.onChange, label = _a.label, customLabel = _a.customLabel, requiredPosition = _a.requiredPosition, disabled = _a.disabled;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { height: size } }, { children: (0, jsx_runtime_1.jsxs)(CustomLabel, __assign({ shape: shape, disabled: disabled, className: className, ref: ref, size: size, gap: gap, style: style, requiredPosition: requiredPosition, checked: checked }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: checked, onChange: onChange }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "label" }, { children: label ? label : customLabel }))] })) })));
});
exports.default = exports.Checkbox;
var CustomLabel = styled_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  gap: ", ";\n  color: ", ";\n  line-height: normal;\n  cursor: pointer;\n\n  input {\n    min-width: ", ";\n    height: ", ";\n    margin: 0px;\n    background-image: ", ";\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    appearance: none;\n    cursor: pointer;\n\n    &:checked {\n      background-image: ", ";\n    }\n  }\n\n  .label {\n    ::before {\n      content: ", ";\n      color: ", ";\n    }\n\n    ::after {\n      content: ", ";\n      color: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  gap: ", ";\n  color: ", ";\n  line-height: normal;\n  cursor: pointer;\n\n  input {\n    min-width: ", ";\n    height: ", ";\n    margin: 0px;\n    background-image: ", ";\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    appearance: none;\n    cursor: pointer;\n\n    &:checked {\n      background-image: ", ";\n    }\n  }\n\n  .label {\n    ::before {\n      content: ", ";\n      color: ", ";\n    }\n\n    ::after {\n      content: ", ";\n      color: ", ";\n    }\n  }\n"])), function (_a) {
    var gap = _a.gap;
    return (gap ? gap : "6px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.black;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var shape = _a.shape, disabled = _a.disabled;
    if (shape === "square") {
        if (disabled) {
            return "url(https://image.thetak.net/asset/product/images/checkbox_disabled.svg)";
        }
        else {
            return "url(https://image.thetak.net/asset/product/images/checkbox_default.svg)";
        }
    }
    if (shape === "circle") {
        if (disabled) {
            return "url(https://image.thetak.net/asset/product/images/checkbox_radio_dsiabled_f.svg)";
        }
        else {
            return "url(https://image.thetak.net/asset/product/images/checkbox_radio_default.svg)";
        }
    }
}, function (_a) {
    var shape = _a.shape, disabled = _a.disabled, theme = _a.theme;
    if (shape === "square") {
        if (disabled) {
            return "url(https://image.thetak.net/asset/product/images/checkbox_disabled_t.svg)";
        }
        else {
            return "url(".concat(theme.checkbox.square.checked, ")");
        }
    }
    if (shape === "circle") {
        if (disabled) {
            return "url(https://image.thetak.net/asset/product/images/checkbox_radio_disabled_t.svg)";
        }
        else {
            return "url(".concat(theme.checkbox.radio.checked, ")");
        }
    }
}, function (_a) {
    var requiredPosition = _a.requiredPosition;
    return requiredPosition === "before" ? '"*"' : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.errorColor.errorMain;
}, function (_a) {
    var requiredPosition = _a.requiredPosition;
    return requiredPosition === "after" ? '"*"' : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.errorColor.errorMain;
});
var templateObject_1;
