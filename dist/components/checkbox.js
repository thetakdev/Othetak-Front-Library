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
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(function Checkbox(_ref, ref) {
  let {
    className,
    shape = "square",
    size = "20px",
    gap,
    style,
    checked = false,
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
      checked: checked,
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
  color: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.colors.grayScale.black;
}};
  line-height: normal;
  cursor: pointer;

  input {
    min-width: ${_ref4 => {
  let {
    size
  } = _ref4;
  return size;
}};
    height: ${_ref5 => {
  let {
    size
  } = _ref5;
  return size;
}};
    margin: 0px;
    background-image: ${_ref6 => {
  let {
    shape,
    disabled
  } = _ref6;
  if (shape === "square") {
    if (disabled) {
      return "url(https://image.thetak.net/asset/product/images/checkbox_disabled.svg)";
    } else {
      return "url(https://image.thetak.net/asset/product/images/checkbox_default.svg)";
    }
  }
  if (shape === "circle") {
    if (disabled) {
      return "url(https://image.thetak.net/asset/product/images/checkbox_radio_dsiabled_f.svg)";
    } else {
      return "url(https://image.thetak.net/asset/product/images/checkbox_radio_default.svg)";
    }
  }
}};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    appearance: none;
    cursor: pointer;

    &:checked {
      background-image: ${_ref7 => {
  let {
    shape,
    disabled,
    theme
  } = _ref7;
  if (shape === "square") {
    if (disabled) {
      return `url(https://image.thetak.net/asset/product/images/checkbox_disabled_t.svg)`;
    } else {
      return `url(${theme.checkbox.square.checked})`;
    }
  }
  if (shape === "circle") {
    if (disabled) {
      return "url(https://image.thetak.net/asset/product/images/checkbox_radio_disabled_t.svg)";
    } else {
      return `url(${theme.checkbox.radio.checked})`;
    }
  }
}};
    }
  }

  .label {
    ::before {
      content: ${_ref8 => {
  let {
    requiredPosition
  } = _ref8;
  return requiredPosition === "before" ? '"*"' : "none";
}};
      color: ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.colors.errorColor.errorMain;
}};
    }

    ::after {
      content: ${_ref10 => {
  let {
    requiredPosition
  } = _ref10;
  return requiredPosition === "after" ? '"*"' : "none";
}};
      color: ${_ref11 => {
  let {
    theme
  } = _ref11;
  return theme.colors.errorColor.errorMain;
}};
    }
  }
`;