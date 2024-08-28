"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _material = require("@mui/material");
var _image = _interopRequireDefault(require("next/image"));
var _common = require("../styles/common");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Modal(_ref) {
  let {
    open,
    onClose,
    style,
    hideBackdrop = false,
    isClose = true,
    closeSize = 24,
    closeStyle,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
    open: open,
    onClose: onClose,
    hideBackdrop: hideBackdrop,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(EContainer, {
      style: style,
      children: [isClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
        className: "close",
        src: '/images/close_btn.svg',
        alt: "close",
        width: closeSize,
        height: closeSize,
        onClick: onClose,
        style: closeStyle
      }), children]
    })
  });
}
const EContainer = _styled.default.div`
  position: absolute;
  top: ${_ref2 => {
  let {
    style
  } = _ref2;
  return style?.top ? style.top : '50%';
}};
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${_common.COLORS.grayScale.white};
  border-radius: 8px;
  border: 1px solid ${_common.COLORS.grayScale.gray3};

  :focus {
    outline: none;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;