"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimaryModal = void 0;
var _modal = _interopRequireDefault(require("../../components/modal"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Modal/Modal",
  component: _modal.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const PrimaryModal = exports.PrimaryModal = {
  render: () => {
    const [visible, setVisible] = (0, _react.useState)(false);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: () => setVisible(true),
        children: "\uBAA8\uB2EC"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_modal.default, {
        onClose: () => setVisible(false),
        open: visible,
        children: "\uB0B4\uC6A9\uB0B4\uC6A9"
      })]
    });
  }
};