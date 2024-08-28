"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _theme = require("../styles/theme");
var _react = require("@emotion/react");
var _jsxRuntime = require("react/jsx-runtime");
const EmotionProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.ThemeProvider, {
    theme: _theme.theme,
    children: children
  });
};
var _default = exports.default = EmotionProvider;