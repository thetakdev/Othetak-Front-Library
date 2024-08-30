"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DatePicker_1 = void 0;
var _datePicker = _interopRequireDefault(require("../../components/date-picker"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Date/DatePicker",
  component: _datePicker.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const DatePicker_1 = exports.DatePicker_1 = {
  render: () => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_datePicker.default, {
      value: new Date(),
      name: "startDate"
    });
  }
};