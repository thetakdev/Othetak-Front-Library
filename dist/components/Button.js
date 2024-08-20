"use strict";
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
var styled_1 = __importDefault(require("@emotion/styled"));
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, children = _a.children, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)(StyledButton, __assign({ variant: variant, style: {}, size: size, onClick: onClick }, { children: children })));
};
var StyledButton = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* \uC2A4\uD0C0\uC77C \uC815\uC758 */\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  /* \uC2A4\uD0C0\uC77C \uC815\uC758 */\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var variant = _a.variant;
    return variant === 'primary' ? '#0070f3' : '#eaeaea';
}, function (_a) {
    var variant = _a.variant;
    return (variant === 'primary' ? '#fff' : '#000');
}, function (_a) {
    var size = _a.size;
    return size === 'small'
        ? '6px 12px'
        : size === 'large'
            ? '10px 20px'
            : '8px 16px';
}, function (_a) {
    var variant = _a.variant;
    return variant === 'primary' ? '#005bb5' : '#cacaca';
});
exports.default = Button;
var templateObject_1;
