"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _image = _interopRequireDefault(require("next/image"));
var _daumAddress = _interopRequireDefault(require("./daum-address"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const KakaoAddress = _ref => {
  let {
    open,
    onClose,
    onSelect
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
    open: open,
    onClose: onClose,
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 500
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        onClick: onClose,
        size: "small",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
          src: `/images/icon/gray/X.svg`,
          width: 28,
          height: 28,
          alt: "close"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_daumAddress.default, {
        onSelect: onSelect,
        setDaumpostOpen: onClose
      })]
    })
  });
};
var _default = exports.default = KakaoAddress;