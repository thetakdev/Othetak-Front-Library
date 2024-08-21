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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var material_1 = require("@mui/material");
var styled_1 = __importDefault(require("@emotion/styled"));
var common_1 = require("@/styles/common");
function Button(_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "middle" : _c, onClick = _a.onClick, children = _a.children, isLoading = _a.isLoading, startIcon = _a.startIcon, endIcon = _a.endIcon, fakeDisabled = _a.fakeDisabled, rest = __rest(_a, ["className", "variant", "size", "onClick", "children", "isLoading", "startIcon", "endIcon", "fakeDisabled"]);
    var disabled = rest.disabled, style = rest.style;
    var loadingStyle = {
        width: parseInt((style === null || style === void 0 ? void 0 : style.height) || "37px") / 2,
        height: parseInt((style === null || style === void 0 ? void 0 : style.height) || "37px") / 2,
        color: "#46227C",
    };
    return ((0, jsx_runtime_1.jsxs)(CustomButton, __assign({ className: className, "aria-label": "", variant: variant, disabled: !!isLoading || disabled, onClick: onClick, isLoading: isLoading, fakeDisabled: fakeDisabled, size: size }, rest, { style: style }, { children: [!isLoading && startIcon, isLoading ? (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { style: loadingStyle }) : children, !isLoading && endIcon] })));
}
exports.default = Button;
var sizeStyle = {
    tiny: {
        height: "28px",
        padding: "0px 8px",
        fontSize: "12px",
    },
    small: {
        height: "36px",
        padding: "0px 14px",
        fontSize: "14px",
    },
    middle: {
        height: "40px",
        padding: "0px 16px",
        fontSize: "14px",
    },
    large: {
        height: "44px",
        padding: "0px 18px",
        fontSize: "16px",
    },
    xLarge: {
        height: "48px",
        padding: "0px 20px",
        fontSize: "16px",
    },
};
var style = {
    primary: {
        default: {
            color: "".concat(common_1.Common.default.colors.grayScale.white),
            backgroundColor: "".concat(common_1.Common.default.colors.mainColor.main),
        },
        disabled: {
            color: "".concat(common_1.Common.default.colors.grayScale.white),
            backgroundColor: "".concat(common_1.Common.default.colors.grayScale.gray3),
        },
        hover: {
            backgroundColor: "".concat(common_1.Common.default.colors.mainColor.main7),
        },
    },
    secondary: {
        default: {
            color: "".concat(common_1.Common.default.colors.mainColor.main),
            backgroundColor: "".concat(common_1.Common.default.colors.grayScale.white),
            border: "1px solid ".concat(common_1.Common.default.colors.mainColor.main),
        },
        disabled: {
            color: "".concat(common_1.Common.default.colors.grayScale.gray3),
            backgroundColor: "".concat(common_1.Common.default.colors.grayScale.white),
            border: "1px solid ".concat(common_1.Common.default.colors.grayScale.gray3),
        },
        hover: {
            color: "".concat(common_1.Common.default.colors.mainColor.main7),
            border: "1px solid ".concat(common_1.Common.default.colors.mainColor.main7),
        },
    },
};
var CustomButton = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  gap: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-wrap: nowrap;\n  box-sizing: border-box;\n  font-weight: 600;\n  border-radius: 8px;\n  border: none;\n\n  ", ";\n  ", "\n  min-width: ", ";\n  height: ", ";\n  padding: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n\n  :hover {\n    ", "\n  }\n\n  :disabled {\n    ", "\n  }\n\n  color: ", ";\n\n  border-color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  gap: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-wrap: nowrap;\n  box-sizing: border-box;\n  font-weight: 600;\n  border-radius: 8px;\n  border: none;\n\n  ", ";\n  ", "\n  min-width: ", ";\n  height: ", ";\n  padding: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n\n  :hover {\n    ", "\n  }\n\n  :disabled {\n    ", "\n  }\n\n  color: ", ";\n\n  border-color: ", ";\n"])), function (_a) {
    var variant = _a.variant;
    return style[variant].default;
}, function (_a) {
    var fakeDisabled = _a.fakeDisabled, variant = _a.variant;
    return fakeDisabled && style[variant].disabled;
}, function (_a) {
    var style = _a.style, size = _a.size;
    return (style === null || style === void 0 ? void 0 : style.width) || sizeStyle[size].minWidth;
}, function (_a) {
    var style = _a.style, size = _a.size;
    return (style === null || style === void 0 ? void 0 : style.height) || sizeStyle[size].height;
}, function (_a) {
    var _b;
    var style = _a.style, size = _a.size;
    return (style === null || style === void 0 ? void 0 : style.padding) || ((_b = sizeStyle[size]) === null || _b === void 0 ? void 0 : _b.padding);
}, function (_a) {
    var _b;
    var style = _a.style, size = _a.size;
    return (style === null || style === void 0 ? void 0 : style.fontSize) || ((_b = sizeStyle[size]) === null || _b === void 0 ? void 0 : _b.fontSize);
}, function (_a) {
    var _b;
    var style = _a.style, size = _a.size;
    return (style === null || style === void 0 ? void 0 : style.fontWeight) || ((_b = sizeStyle[size]) === null || _b === void 0 ? void 0 : _b.fontWeight);
}, function (_a) {
    var variant = _a.variant, fakeDisabled = _a.fakeDisabled;
    return (fakeDisabled ? "" : style[variant].hover);
}, function (_a) {
    var variant = _a.variant;
    return style[variant].disabled;
}, function (_a) {
    var variant = _a.variant, fakeDisabled = _a.fakeDisabled;
    return fakeDisabled && variant === "primary"
        ? "".concat(common_1.Common.default.colors.grayScale.white)
        : fakeDisabled && variant === "secondary"
            ? "".concat(common_1.Common.default.colors.grayScale.gray3)
            : "";
}, function (_a) {
    var fakeDisabled = _a.fakeDisabled;
    return fakeDisabled && "".concat(common_1.Common.default.colors.grayScale.gray3);
});
var templateObject_1;
