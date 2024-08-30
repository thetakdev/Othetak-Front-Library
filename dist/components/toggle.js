"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = void 0;
exports.default = Toggle;
var _styles = require("@mui/material/styles");
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _react = require("@emotion/react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ToggleSwitch = exports.ToggleSwitch = (0, _styles.styled)(props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
  focusVisibleClassName: ".Mui-focusVisible",
  disableRipple: true,
  ...props
}))(_ref => {
  let {
    theme
  } = _ref;
  return {
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
          backgroundColor: (0, _react.useTheme)().colors.mainColor.main,
          opacity: 1,
          border: "0px !important"
        }
      }
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 18,
      height: 18,
      border: "0px !important"
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500
      })
    },
    "& .Mui-disabled + .MuiSwitch-track": {
      background: "#D0D5DD !important",
      opacity: "0.9 !important"
    }
  };
});
function Toggle(_ref2) {
  let {
    ...rest
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
    sx: {
      margin: 0
    },
    control: /*#__PURE__*/(0, _jsxRuntime.jsx)(ToggleSwitch, {
      sx: {
        m: 1
      },
      ...rest
    }),
    label: ""
  });
}