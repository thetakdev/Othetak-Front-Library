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
var react_1 = require("react");
var styled_1 = __importDefault(require("@emotion/styled"));
// 컴포넌트
exports.default = (0, react_1.forwardRef)(function Input(_a, ref) {
    var className = _a.className, register = _a.register, name = _a.name, style = _a.style, inputStyle = _a.inputStyle, adornment = _a.adornment, adornmentStyle = _a.adornmentStyle, _b = _a.size, size = _b === void 0 ? "big" : _b, _c = _a.status, status = _c === void 0 ? "normal" : _c, rest = __rest(_a, ["className", "register", "name", "style", "inputStyle", "adornment", "adornmentStyle", "size", "status"]);
    return ((0, jsx_runtime_1.jsxs)(EContainer, __assign({ className: className, style: style, size: size, status: status, position: adornment === null || adornment === void 0 ? void 0 : adornment.position, gap: adornment === null || adornment === void 0 ? void 0 : adornment.gap, inputStyle: inputStyle }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({}, register ? __assign({}, register(name)) : undefined, { autoComplete: "off", style: inputStyle }, rest)), (0, jsx_runtime_1.jsx)("div", __assign({ className: "adornment-wrapper", style: adornmentStyle }, { children: adornment === null || adornment === void 0 ? void 0 : adornment.adornment }))] })));
});
// 스타일 정의
var EContainer = styled_1.default.div(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, size = _a.size, status = _a.status, inputStyle = _a.inputStyle, position = _a.position, gap = _a.gap;
    return {
        display: 'flex',
        position: "relative",
        width: (inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.width) || SIZE_STYLE[size].width,
        input: {
            border: STATUS_STYLE(theme)[status].border,
            backgroundColor: STATUS_STYLE(theme)[status].backgroundColor,
            width: (inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.width) || SIZE_STYLE[size].width,
            height: (inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.height) || SIZE_STYLE[size].height,
            fontSize: (inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.fontSize) || SIZE_STYLE[size].fontSize,
            borderRadius: "8px",
            padding: "10px 12px",
            paddingRight: position === "end" ? "20px" : "10px",
            paddingLeft: position === "start" ? "20px" : "10px",
            fontWeight: 400,
            "::placeholder": {
                color: (_b = theme.colors.grayScale) === null || _b === void 0 ? void 0 : _b.gray3,
            },
            ":focus": {
                borderColor: theme.colors.mainColor.main,
            },
            ":focus-visible": {
                outline: "none",
            },
            ":disabled": {
                color: (_c = theme.colors.grayScale) === null || _c === void 0 ? void 0 : _c.gray25,
                backgroundColor: (_d = theme.colors) === null || _d === void 0 ? void 0 : _d.grayScale.gray4,
            },
        },
        ".adornment-wrapper": {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            right: position === "end" ? "".concat(gap, "px") : "",
            left: position === "start" ? "".concat(gap, "px") : "",
        },
    };
});
var STATUS_STYLE = function (theme) {
    var _a, _b, _c;
    return ({
        normal: {
            border: "1px solid ".concat((_a = theme.colors) === null || _a === void 0 ? void 0 : _a.grayScale.gray3),
            backgroundColor: "#FFF",
        },
        error: {
            border: "1px solid ".concat((_b = theme.colors) === null || _b === void 0 ? void 0 : _b.errorColor.errorMain),
            backgroundColor: (_c = theme.colors) === null || _c === void 0 ? void 0 : _c.errorColor.error3,
        },
    });
};
var SIZE_STYLE = {
    big: {
        width: "320px",
        height: "44px",
        fontSize: "16px",
    },
    small: {
        width: "137px",
        height: "32px",
        fontSize: "12px",
    },
    tiny: {
        width: "137px",
        height: "28px",
        fontSize: "12px",
    },
    responsive: {
        width: "100%",
        height: "32px",
        fontSize: "12px",
    },
};
