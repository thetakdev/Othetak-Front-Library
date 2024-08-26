"use strict";
"use client";
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
var react_1 = require("@emotion/react");
function Button(_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "middle" : _c, onClick = _a.onClick, children = _a.children, isLoading = _a.isLoading, startIcon = _a.startIcon, endIcon = _a.endIcon, fakeDisabled = _a.fakeDisabled, rest = __rest(_a, ["className", "variant", "size", "onClick", "children", "isLoading", "startIcon", "endIcon", "fakeDisabled"]);
    var theme = (0, react_1.useTheme)();
    var disabled = rest.disabled, style = rest.style;
    
    var loadingStyle = {
        width: parseInt((style === null || style === void 0 ? void 0 : style.height) || "37px") / 2,
        height: parseInt((style === null || style === void 0 ? void 0 : style.height) || "37px") / 2,
        // color: theme.colors.mainColor.main,
    };
    return ((0, jsx_runtime_1.jsxs)(CustomButton, __assign({ className: className, "aria-label": "", variant: variant, disabled: !!isLoading || disabled, onClick: onClick, isLoading: isLoading, fakeDisabled: fakeDisabled, size: size }, rest, { style: style, theme: theme }, { children: [!isLoading && startIcon, isLoading ? (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { style: loadingStyle }) : children, "asdasd", !isLoading && endIcon] })));
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
var buttonStyle = function (theme) { return ({
    primary: {
        default: {
            color: theme.colors.grayScale.white,
            // backgroundColor: theme.colors.mainColor.main,
        },
        disabled: {
            color: theme.colors.grayScale.white,
            backgroundColor: theme.colors.grayScale.gray3,
        },
        hover: {
        // // backgroundColor: theme.colors.mainColor.main7,
        },
    },
    secondary: {
        default: {
            // // color: theme.colors.mainColor.main,
            backgroundColor: theme.colors.grayScale.white,
            // // border: `1px solid ${theme.colors.mainColor.main}`,
        },
        disabled: {
            color: theme.colors.grayScale.gray3,
            backgroundColor: theme.colors.grayScale.white,
            border: "1px solid ".concat(theme.colors.grayScale.gray3),
        },
        hover: {
        // // color: theme.colors.mainColor.main7,
        // border: `1px solid ${theme.colors.mainColor.main7}`,
        },
    },
}); };
var CustomButton = styled_1.default.button(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, variant = _a.variant, size = _a.size, style = _a.style, fakeDisabled = _a.fakeDisabled;
    return (__assign(__assign(__assign({ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer", whiteSpace: "nowrap", flexWrap: "nowrap", boxSizing: "border-box", borderRadius: "8px", border: "none" }, buttonStyle(theme)[variant].default), (fakeDisabled && buttonStyle(theme)[variant].disabled)), { minWidth: (style === null || style === void 0 ? void 0 : style.width) || sizeStyle[size].minWidth, height: (style === null || style === void 0 ? void 0 : style.height) || sizeStyle[size].height, padding: (style === null || style === void 0 ? void 0 : style.padding) || ((_b = sizeStyle[size]) === null || _b === void 0 ? void 0 : _b.padding), fontSize: (style === null || style === void 0 ? void 0 : style.fontSize) || ((_c = sizeStyle[size]) === null || _c === void 0 ? void 0 : _c.fontSize), fontWeight: (style === null || style === void 0 ? void 0 : style.fontWeight) || ((_d = sizeStyle[size]) === null || _d === void 0 ? void 0 : _d.fontWeight), ":hover": fakeDisabled ? "" : buttonStyle(theme)[variant].hover, ":disabled": buttonStyle(theme)[variant].disabled, color: fakeDisabled && variant === "primary"
            ? theme.colors.grayScale.white
            : fakeDisabled && variant === "secondary"
                ? theme.colors.grayScale.gray3
                : "", borderColor: fakeDisabled ? theme.colors.grayScale.gray3 : "" }));
});
