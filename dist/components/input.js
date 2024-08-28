"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// 타입 정의
// 컴포넌트
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(function Input(_ref, ref) {
  let {
    className,
    register,
    name,
    style,
    inputStyle,
    adornment,
    adornmentStyle,
    successMessage,
    errorMessage,
    size = "big",
    status = "normal",
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(EContainer, {
    className: className,
    style: style,
    size: size,
    status: status,
    position: adornment?.position,
    gap: adornment?.gap,
    inputStyle: inputStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ...register(name),
      autoComplete: "off",
      style: inputStyle,
      ...rest
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "adornment-wrapper",
      style: adornmentStyle,
      children: adornment?.adornment
    })]
  });
}); // 스타일 정의
const EContainer = _styled.default.div(_ref2 => {
  let {
    theme,
    size,
    status,
    inputStyle,
    position,
    gap
  } = _ref2;
  return {
    position: "relative",
    width: inputStyle?.width || SIZE_STYLE[size].width,
    input: {
      border: STATUS_STYLE(theme)[status].border,
      backgroundColor: STATUS_STYLE(theme)[status].backgroundColor,
      width: inputStyle?.width || SIZE_STYLE[size].width,
      height: inputStyle?.height || SIZE_STYLE[size].height,
      fontSize: inputStyle?.fontSize || SIZE_STYLE[size].fontSize,
      borderRadius: "8px",
      padding: "10px 12px",
      paddingRight: position === "end" ? `${20 + gap + gap}px` : "10px",
      paddingLeft: position === "start" ? `${20 + gap + gap}px` : "10px",
      fontWeight: 400,
      "::placeholder": {
        color: theme.colors.grayScale?.gray3
      },
      ":focus": {
        borderColor: theme.colors.mainColor.main
      },
      ":focus-visible": {
        outline: "none"
      },
      ":disabled": {
        color: theme.colors.grayScale?.gray25,
        backgroundColor: theme.colors?.grayScale.gray4
      }
    },
    ".adornment-wrapper": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      right: position === "end" ? `${gap}px` : "",
      left: position === "start" ? `${gap}px` : ""
    }
  };
});
const STATUS_STYLE = theme => ({
  normal: {
    border: `1px solid ${theme.colors?.grayScale.gray3}`,
    backgroundColor: "#FFF"
  },
  error: {
    border: `1px solid ${theme.colors?.errorColor.errorMain}`,
    backgroundColor: theme.colors?.errorColor.error3
  }
});
const SIZE_STYLE = {
  big: {
    width: "320px",
    height: "44px",
    fontSize: "16px"
  },
  small: {
    width: "137px",
    height: "32px",
    fontSize: "12px"
  },
  tiny: {
    width: "137px",
    height: "28px",
    fontSize: "12px"
  },
  responsive: {
    width: "100%",
    height: "32px",
    fontSize: "12px"
  }
};