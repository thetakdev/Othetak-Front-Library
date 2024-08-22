"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _common = require("@/styles/common");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(function Checkbox(_ref, ref) {
  let {
    className,
    shape = "square",
    size = "20px",
    gap,
    style,
    checked,
    onChange,
    label,
    customLabel,
    requiredPosition,
    disabled
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: size
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(CustomLabel, {
      shape: shape,
      disabled: disabled,
      className: className,
      ref: ref,
      size: size,
      gap: gap,
      style: style,
      requiredPosition: requiredPosition,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "checkbox",
        checked: checked,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "label",
        children: label ? label : customLabel
      })]
    })
  });
});
const CustomLabel = _styled.default.label`
  display: inline-flex;
  align-items: center;
  gap: ${_ref2 => {
  let {
    gap
  } = _ref2;
  return gap ? gap : "6px";
}};
  color: ${_common.Common.default.colors.grayScale.black};
  line-height: normal;
  cursor: pointer;

  input {
    min-width: ${_ref3 => {
  let {
    size
  } = _ref3;
  return size;
}};
    height: ${_ref4 => {
  let {
    size
  } = _ref4;
  return size;
}};
    margin: 0px;
    background-image: ${_ref5 => {
  let {
    shape,
    disabled
  } = _ref5;
  if (shape === "square") {
    if (disabled) {
      return "url(/images/checkbox/checkbox_disabled.svg)";
    } else {
      return "url(/images/checkbox/checkbox_admin_main.svg)";
    }
  }
  if (shape === "circle") {
    if (disabled) {
      return "url(/images/icon/radio/radio_unchecked_disabled.svg)";
    } else {
      return "url(/images/icon/radio/radio_unchecked_gray_3.svg)";
    }
  }
}};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    appearance: none;
    cursor: pointer;

    &:checked {
      background-image: ${_ref6 => {
  let {
    shape,
    disabled
  } = _ref6;
  if (shape === "square") {
    if (disabled) {
      return "url(/images/checkbox/checkbox_checked_disabled.svg)";
    } else {
      return "url(/images/checkbox/checkbox_checked_admin_main.svg)";
    }
  }
  if (shape === "circle") {
    if (disabled) {
      return "url(/images/icon/radio/radio_unchecked_disabled.svg)";
    } else {
      return "url(/images/icon/radio/radio_checked_admin_main.svg)";
    }
  }
}};
    }
  }

  .label {
    ::before {
      content: ${_ref7 => {
  let {
    requiredPosition
  } = _ref7;
  return requiredPosition === "before" ? '"*"' : "none";
}};
      color: ${_common.Common.default.colors.errorColor.errorMain};
    }

    ::after {
      content: ${_ref8 => {
  let {
    requiredPosition
  } = _ref8;
  return requiredPosition === "after" ? '"*"' : "none";
}};
      color: ${_common.Common.default.colors.errorColor.errorMain};
    }
  }
`;