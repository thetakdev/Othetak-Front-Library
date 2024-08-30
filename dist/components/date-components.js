"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateComponent = DateComponent;
var _material = require("@mui/material");
var _reactHookForm = require("react-hook-form");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _datePicker = _interopRequireDefault(require("./date-picker"));
var _common = require("../styles/common");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function DateComponent(_ref) {
  let {
    control,
    setValue,
    getValues,
    watch,
    alignment,
    setAlignment
  } = _ref;
  const handleChangeDate = (date, name) => {
    setValue(name, date);
  };

  // 날짜 토글 버튼 선택
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setValue('startDate', (0, _dayjs.default)().subtract(Number(newAlignment), 'day').toDate());
      setValue('endDate', new Date());
      if (newAlignment === '-1') {
        setValue('endDate', null);
        setValue('startDate', null);
      }
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHookForm.Controller, {
      name: "startDate",
      control: control,
      render: _ref2 => {
        let {
          field
        } = _ref2;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_datePicker.default, {
          ...field,
          value: watch('startDate') ? new Date(getValues('startDate')) : null,
          maxDate: watch('endDate') ? new Date(getValues('endDate')) : new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
          onChange: handleChangeDate
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        mx: '3px'
      },
      children: "~"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHookForm.Controller, {
      name: "endDate",
      control: control,
      render: _ref3 => {
        let {
          field
        } = _ref3;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_datePicker.default, {
          ...field,
          value: watch('endDate') ? new Date(getValues('endDate')) : null,
          minDate: watch('startDate') && new Date(getValues('startDate')),
          onChange: handleChangeDate
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledToggleButtonGroup, {
      sx: {
        ml: '8px',
        gap: '4px'
      },
      value: alignment,
      size: "small",
      exclusive: true,
      onChange: handleChange,
      "aria-label": "Platform",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ToggleButton, {
        disableRipple: true,
        value: "-1",
        children: "\uC804\uCCB4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ToggleButton, {
        disableRipple: true,
        value: "0",
        children: "\uC624\uB298"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ToggleButton, {
        disableRipple: true,
        value: "1",
        children: "\uC5B4\uC81C"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ToggleButton, {
        disableRipple: true,
        value: "30",
        children: "-30\uC77C"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ToggleButton, {
        disableRipple: true,
        value: "90",
        children: "-90\uC77C"
      })]
    })]
  });
}
const StyledToggleButtonGroup = (0, _material.styled)(_material.ToggleButtonGroup)(() => ({
  '.MuiToggleButton-root': {
    color: _common.COLORS.mainColor.main
  },
  '.MuiButtonBase-root.Mui-selected': {
    color: '#FFFFFF',
    backgroundColor: _common.COLORS.mainColor.main,
    '&:hover': {
      backgroundColor: _common.COLORS.mainColor.main
    }
  },
  '.MuiToggleButtonGroup-grouped': {
    height: '28px',
    minWidth: '39px',
    borderRadius: '8px',
    border: `1px solid ${_common.COLORS.mainColor.main}`,
    '&:not(:first-of-type)': {
      borderRadius: '8px',
      border: `1px solid ${_common.COLORS.mainColor.main}`
    },
    '&:not(:last-of-type)': {
      borderRadius: '8px'
    },
    '&:first-of-type': {
      borderRadius: '8px'
    }
  }
}));