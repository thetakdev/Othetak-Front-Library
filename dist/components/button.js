"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _common = require("../styles/common");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Button(_ref) {
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
  const {
    disabled,
    style
  } = rest;
  const loadingStyle = {
    width: parseInt(style?.height || "37px") / 2,
    height: parseInt(style?.height || "37px") / 2,
    color: "#46227C"
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
    children: [!isLoading && startIcon, isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
      style: loadingStyle
    }) : children, !isLoading && endIcon]
  });
}
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
const style = {
  primary: {
    default: {
      color: `${_common.Common.default.colors.grayScale.white}`,
      backgroundColor: `${_common.Common.default.colors.mainColor.main}`
    },
    disabled: {
      color: `${_common.Common.default.colors.grayScale.white}`,
      backgroundColor: `${_common.Common.default.colors.grayScale.gray3}`
    },
    hover: {
      backgroundColor: `${_common.Common.default.colors.mainColor.main7}`
    }
  },
  secondary: {
    default: {
      color: `${_common.Common.default.colors.mainColor.main}`,
      backgroundColor: `${_common.Common.default.colors.grayScale.white}`,
      border: `1px solid ${_common.Common.default.colors.mainColor.main}`
    },
    disabled: {
      color: `${_common.Common.default.colors.grayScale.gray3}`,
      backgroundColor: `${_common.Common.default.colors.grayScale.white}`,
      border: `1px solid ${_common.Common.default.colors.grayScale.gray3}`
    },
    hover: {
      color: `${_common.Common.default.colors.mainColor.main7}`,
      border: `1px solid ${_common.Common.default.colors.mainColor.main7}`
    }
  }
};
const CustomButton = _styled.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  flex-wrap: nowrap;
  box-sizing: border-box;
  font-weight: 600;
  border-radius: 8px;
  border: none;

  ${_ref2 => {
  let {
    variant
  } = _ref2;
  return style[variant].default;
}};
  ${_ref3 => {
  let {
    fakeDisabled,
    variant
  } = _ref3;
  return fakeDisabled && style[variant].disabled;
}}
  min-width: ${_ref4 => {
  let {
    style,
    size
  } = _ref4;
  return style?.width || sizeStyle[size].minWidth;
}};
  height: ${_ref5 => {
  let {
    style,
    size
  } = _ref5;
  return style?.height || sizeStyle[size].height;
}};
  padding: ${_ref6 => {
  let {
    style,
    size
  } = _ref6;
  return style?.padding || sizeStyle[size]?.padding;
}};
  font-size: ${_ref7 => {
  let {
    style,
    size
  } = _ref7;
  return style?.fontSize || sizeStyle[size]?.fontSize;
}};
  font-weight: ${_ref8 => {
  let {
    style,
    size
  } = _ref8;
  return style?.fontWeight || sizeStyle[size]?.fontWeight;
}};

  :hover {
    ${_ref9 => {
  let {
    variant,
    fakeDisabled
  } = _ref9;
  return fakeDisabled ? "" : style[variant].hover;
}}
  }

  :disabled {
    ${_ref10 => {
  let {
    variant
  } = _ref10;
  return style[variant].disabled;
}}
  }

  color: ${_ref11 => {
  let {
    variant,
    fakeDisabled
  } = _ref11;
  return fakeDisabled && variant === "primary" ? `${_common.Common.default.colors.grayScale.white}` : fakeDisabled && variant === "secondary" ? `${_common.Common.default.colors.grayScale.gray3}` : "";
}};

  border-color: ${_ref12 => {
  let {
    fakeDisabled
  } = _ref12;
  return fakeDisabled && `${_common.Common.default.colors.grayScale.gray3}`;
}};
`;