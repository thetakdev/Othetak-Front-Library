"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimaryAlert = void 0;
var _alert = _interopRequireDefault(require("../../components/alert"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Modal/Alert",
  component: _alert.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const PrimaryAlert = exports.PrimaryAlert = {
  render: () => {
    const [visible, setVisible] = (0, _react.useState)(false);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: () => setVisible(true),
        children: "\uC5BC\uB7FF\uC5F4\uAE30"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_alert.default, {
        title: "\uD0C0\uC774\uD2C0",
        subTitle: "\uC11C\uBE0C\uD0C0\uC774\uD2C0",
        onCancel: () => setVisible(false),
        onConfirm: () => setVisible(false),
        open: visible
      })]
    });
  }
};