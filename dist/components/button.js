"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _react2 = require("@emotion/react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = _ref => {
  let {
    className,
    variant = "primary",
    size = "middle",
    onClick,
    children,
    isLoading,
    startIcon,
    endIcon,
    fakeDisabled,
    ...rest
  } = _ref;
  const theme = (0, _react2.useTheme)();
  const {
    disabled,
    style
  } = rest;
  const loadingStyle = {
    width: parseInt(style?.height || "37px") / 2,
    height: parseInt(style?.height || "37px") / 2,
    color: theme.colors.mainColor.main
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(CustomButton, {
    className: className,
    "aria-label": "",
    variant: variant,
    disabled: !!isLoading || disabled,
    onClick: onClick,
    isLoading: isLoading,
    fakeDisabled: fakeDisabled,
    size: size,
    ...rest,
    style: style,
    theme: theme // 테마 전달
    ,
    children: [!isLoading && startIcon, isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
      style: loadingStyle
    }) : children, !isLoading && endIcon]
  });
};
var _default = exports.default = Button;
const sizeStyle = {
  tiny: {
    height: "28px",
    padding: "0px 8px",
    fontSize: "12px"
  },
  small: {
    height: "36px",
    padding: "0px 14px",
    fontSize: "14px"
  },
  middle: {
    height: "40px",
    padding: "0px 16px",
    fontSize: "14px"
  },
  large: {
    height: "44px",
    padding: "0px 18px",
    fontSize: "16px"
  },
  xLarge: {
    height: "48px",
    padding: "0px 20px",
    fontSize: "16px"
  }
};
const buttonStyle = theme => ({
  primary: {
    default: {
      color: theme.colors.grayScale.white,
      backgroundColor: theme.colors.mainColor.main
    },
    disabled: {
      color: theme.colors.grayScale.white,
      backgroundColor: theme.colors.grayScale.gray3
    },
    hover: {
      backgroundColor: theme.colors.mainColor.main7
    }
  },
  secondary: {
    default: {
      color: theme.colors.mainColor.main,
      backgroundColor: theme.colors.grayScale.white,
      border: `1px solid ${theme.colors.mainColor.main}`
    },
    disabled: {
      color: theme.colors.grayScale.gray3,
      backgroundColor: theme.colors.grayScale.white,
      border: `1px solid ${theme.colors.grayScale.gray3}`
    },
    hover: {
      color: theme.colors.mainColor.main7,
      border: `1px solid ${theme.colors.mainColor.main7}`
    }
  }
});
const CustomButton = _styled.default.button(_ref2 => {
  let {
    theme,
    variant,
    size,
    style,
    fakeDisabled
  } = _ref2;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexWrap: "nowrap",
    boxSizing: "border-box",
    borderRadius: "8px",
    border: "none",
    ...buttonStyle(theme)[variant].default,
    ...(fakeDisabled && buttonStyle(theme)[variant].disabled),
    minWidth: style?.width || sizeStyle[size].minWidth,
    height: style?.height || sizeStyle[size].height,
    padding: style?.padding || sizeStyle[size]?.padding,
    fontSize: style?.fontSize || sizeStyle[size]?.fontSize,
    fontWeight: style?.fontWeight || sizeStyle[size]?.fontWeight,
    ":hover": fakeDisabled ? "" : buttonStyle(theme)[variant].hover,
    ":disabled": buttonStyle(theme)[variant].disabled,
    borderColor: fakeDisabled ? theme.colors.grayScale.gray3 : ""
  };
});