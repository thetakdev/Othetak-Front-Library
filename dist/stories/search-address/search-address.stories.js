"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimarySearchAddress = void 0;
var _searchAddress = _interopRequireDefault(require("../../components/search-address"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/SearchAddress/SearchAddress",
  component: _searchAddress.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const PrimarySearchAddress = exports.PrimarySearchAddress = {
  render: () => {
    const [visible, setVisible] = (0, _react.useState)(false);
    const handleSelectAddress = data => {
      console.log("data", data);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: () => setVisible(true),
        children: "\uC8FC\uC18C\uAC80\uC0C9"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_searchAddress.default, {
        open: visible,
        onClose: () => setVisible(false),
        onSelect: handleSelectAddress
      })]
    });
  }
};