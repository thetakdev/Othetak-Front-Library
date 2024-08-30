"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimarySelect = void 0;
var _select = _interopRequireDefault(require("../../components/select"));
var _react = require("react");
var _reactHookForm = require("react-hook-form");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Select/Select",
  component: _select.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const PrimarySelect = exports.PrimarySelect = {
  render: () => {
    const initialParams = {
      userTypeCode: 2
    };
    const {
      control,
      getValues
    } = (0, _reactHookForm.useForm)({
      defaultValues: initialParams
    });
    const OPTIONS = [{
      label: "선택1",
      value: 1
    }, {
      label: "선택2",
      value: 2
    }, {
      label: "선택3",
      value: 3
    }, {
      label: "선택4",
      value: 4
    }, {
      label: "선택1",
      value: 5
    }, {
      label: "선택2",
      value: 6
    }, {
      label: "선택3",
      value: 7
    }, {
      label: "선택4",
      value: 8
    }, {
      label: "선택1",
      value: 1
    }, {
      label: "선택2",
      value: 2
    }, {
      label: "선택3",
      value: 3
    }, {
      label: "선택4",
      value: 4
    }, {
      label: "선택1",
      value: 5
    }, {
      label: "선택2",
      value: 6
    }, {
      label: "선택3",
      value: 7
    }, {
      label: "선택4",
      value: 8
    }, {
      label: "선택1",
      value: 1
    }, {
      label: "선택2",
      value: 2
    }, {
      label: "선택3",
      value: 3
    }, {
      label: "선택4",
      value: 4
    }, {
      label: "선택1",
      value: 5
    }, {
      label: "선택2",
      value: 6
    }, {
      label: "선택3",
      value: 7
    }, {
      label: "선택4",
      value: 8
    }];
    (0, _react.useEffect)(() => {
      console.log("getValues", getValues());
    }, [getValues()]);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          children: "Select"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "tiny",
          placeholder: "\uC120\uD0DD"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "tiny",
          placeholder: "\uC120\uD0DD",
          disabled: true
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          children: "MultiSelect"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "tiny",
          placeholder: "\uC120\uD0DD",
          multiSelect: true
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          children: "\uC804\uCCB4 \uC120\uD0DD"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "tiny",
          placeholder: "\uC120\uD0DD",
          multiSelect: true,
          allCheck: true
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          children: "SIZE"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "small",
          multiSelect: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "normal"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "big"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_select.default, {
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "responsive"
        })]
      })]
    });
  }
};