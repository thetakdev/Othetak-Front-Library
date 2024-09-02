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
exports.ToggleSwitch = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var react_1 = require("@emotion/react");
exports.ToggleSwitch = (0, styles_1.styled)(function (props) { return ((0, jsx_runtime_1.jsx)(Switch_1.default, __assign({ focusVisibleClassName: ".Mui-focusVisible", disableRipple: true }, props))); })(function (_a) {
    var theme = _a.theme;
    return ({
        width: 36,
        height: 20,
        border: "0px !important",
        padding: 0,
        "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: "1px 1px",
            transitionDuration: "300ms",
            border: "0px !important",
            "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                border: "0px !important",
                "& + .MuiSwitch-track": {
                    backgroundColor: (0, react_1.useTheme)().colors.mainColor.main,
                    opacity: 1,
                    border: "0px !important",
                },
            },
        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 18,
            height: 18,
            border: "0px !important",
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
                duration: 500,
            }),
        },
        "& .Mui-disabled + .MuiSwitch-track": {
            background: "#D0D5DD !important",
            opacity: "0.9 !important",
        },
    });
});
function Toggle(_a) {
    var rest = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { sx: { margin: 0 }, control: (0, jsx_runtime_1.jsx)(exports.ToggleSwitch, __assign({ sx: { m: 1 } }, rest)), label: "" }));
}
exports.default = Toggle;
