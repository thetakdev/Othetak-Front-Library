"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Accordion_1 = void 0;
var _accordion = _interopRequireDefault(require("../../components/accordion"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Accordion/Accordion",
  component: _accordion.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const Accordion_1 = exports.Accordion_1 = {
  render: () => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_accordion.default, {
      summary: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "circle"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
          className: "dot",
          children: "\uAE30\uBCF8 \uAD00\uB9AC"
        })]
      }),
      details: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "\uB0B4\uC6A9\uB0B4\uC6A9"
      })
    });
  }
};