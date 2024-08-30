"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateComponent_1 = void 0;
var _dateComponent = _interopRequireDefault(require("../../components/date-component"));
var _react = require("react");
var _reactHookForm = require("react-hook-form");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Date/DateComponent",
  component: _dateComponent.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const DateComponent_1 = exports.DateComponent_1 = {
  render: () => {
    const initialParams = {
      startDate: null,
      endDate: null,
      title: null
    };
    const {
      control,
      getValues,
      setValue,
      watch
    } = (0, _reactHookForm.useForm)({
      defaultValues: initialParams
    });
    const [alignment, setAlignment] = (0, _react.useState)("-1");
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_dateComponent.default, {
      control: control,
      setValue: setValue,
      getValues: getValues,
      watch: watch,
      alignment: alignment,
      setAlignment: setAlignment
    });
  }
};