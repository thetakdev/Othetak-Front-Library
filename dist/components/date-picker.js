"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _xDatePickers = require("@mui/x-date-pickers");
var _AdapterDateFns = require("@mui/x-date-pickers/AdapterDateFns");
var _locale = require("date-fns/locale");
var _material = require("@mui/material");
var _image = _interopRequireDefault(require("next/image"));
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(function DatePicker(_ref, ref) {
  let {
    name,
    value,
    onChange,
    disabled,
    minDate,
    maxDate,
    isEndDate = false,
    style
  } = _ref;
  const [visible, setVisible] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_xDatePickers.LocalizationProvider, {
    dateAdapter: _AdapterDateFns.AdapterDateFns,
    adapterLocale: _locale.ko,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomDatePicker, {
      name: name,
      sx: style,
      value: value,
      onChange: e => onChange(e, name),
      minDate: new Date(minDate),
      maxDate: new Date(maxDate),
      format: "yyyy.MM.dd",
      disabled: disabled,
      slots: {
        toolbar: () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: isEndDate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkbox.default, {
            label: "\uC885\uB8CC\uC77C \uC5C6\uC74C",
            size: "16px",
            gap: "8px",
            checked: value === null ? true : false,
            onChange: e => onChange(e.target.checked, "noEndDate"),
            style: CHECKBOX_STYLE
          })
        }),
        desktopPaper: desktopPaper,
        layout: layout,
        rightArrowIcon: rightArrowIcon,
        leftArrowIcon: LeftArrowIcon,
        openPickerIcon: () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
          src: disabled ? "https://image.thetak.net/asset/product/images/calender_admin_3.svg" : visible ? "https://image.thetak.net/asset/product/images/calender_admin_main.svg" : "https://image.thetak.net/asset/product/images/calender_admin_3.svg",
          width: 16,
          height: 16,
          alt: "calendar"
        })
      },
      visible: visible,
      onOpen: () => setVisible(true),
      onClose: () => setVisible(false)
    })
  });
});
const CustomDatePicker = (0, _styled.default)(_xDatePickers.DatePicker)`
  position: relative;
  background-color: ${_ref2 => {
  let {
    disabled,
    theme
  } = _ref2;
  return disabled ? `${theme.colors.grayScale.gray4}` : `${theme.colors.grayScale.white}`;
}};
  border-radius: 8px;

  .MuiOutlinedInput-root {
    width: 110px;
    height: 32px;
    padding: 0px;
    border: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return `1px solid ${theme.colors.grayScale.gray3}`;
}};
    border-radius: 8px;
    font-size: 12px;
    font-weight: 400;
    z-index: 1;
  }
  .MuiOutlinedInput-input {
    width: 80px;
    padding: 0px;
    padding-left: 7px;
    color: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return `${theme.colors.grayScale.black}`;
}};
    z-index: 1;
    :focus {
      color: ${_ref5 => {
  let {
    theme
  } = _ref5;
  return `${theme.colors.grayScale.black}`;
}};
    }
  }
  .MuiIconButton-root {
    display: block;
    padding: 0px;
    padding-right: 18px;
  }
  .MuiIconButton-root:hover {
    background-color: transparent;
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
  .Mui-disabled {
    -webkit-text-fill-color: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return `${theme.colors.grayScale.gray25}`;
}};
  }
  .MuiTouchRipple-root {
    display: none;
  }
`;
const desktopPaper = (0, _styled.default)(_material.Paper)({
  width: "303px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 18px -4px rgba(16, 24, 40, 0.08)"
});

// 수정된 코드
const layout = (0, _styled.default)(_xDatePickers.PickersLayout)(_ref7 => {
  let {
    theme
  } = _ref7;
  return {
    ".MuiDateCalendar-root": {
      width: "263px",
      height: "100%",
      margin: "0px"
    },
    ".MuiPickersCalendarHeader-root": {
      margin: "0",
      marginBottom: "32px",
      padding: "0",
      maxHeight: "23px",
      minHeight: "23px"
    },
    ".MuiPickersCalendarHeader-labelContainer": {
      position: "absolute",
      top: "20px",
      left: "50%",
      transform: "translate(-50%)",
      margin: "0",
      marginLeft: "8px",
      height: "23px"
    },
    ".MuiPickersCalendarHeader-label": {
      fontSize: "18px",
      fontWeight: "700"
    },
    ".MuiPickersCalendarHeader-switchViewButton": {
      color: `${theme.colors.grayScale.black}` // theme 객체 접근
    },
    ".MuiPickersCalendarHeader-switchViewButton:hover": {
      backgroundColor: "transparent"
    },
    ".MuiButtonBase-root": {
      boxShadow: "border-box",
      width: "24px",
      height: "24px",
      padding: "6px"
    },
    ".MuiIconButton-edgeStart": {
      position: "absolute",
      top: "20px",
      right: "20px",
      padding: "0px"
    },
    ".MuiIconButton-edgeEnd": {
      position: "absolute",
      top: "20px",
      left: "20px",
      padding: "0px"
    },
    ".MuiPickersArrowSwitcher-button": {
      backgroundColor: "transparent"
    },
    ".MuiPickersArrowSwitcher-button:hover": {
      backgroundColor: `transparent`
    },
    ".MuiTouchRipple-root": {
      display: "none"
    },
    ".MuiDayCalendar-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "24px",
      span: {
        color: "#2D31A6",
        fontSize: "14px"
      },
      "span:nth-of-type(1)": {
        color: "#FEA3B4"
      },
      "span:nth-of-type(7)": {
        color: "#8098F9"
      },
      ".MuiTypography-root": {
        width: "24px",
        height: "24px",
        padding: "6px",
        lineHeight: "24px"
      }
    },
    ".MuiPickersSlideTransition-root": {
      minHeight: "210px"
    },
    ".MuiPickersDay-root": {
      color: `${theme.colors.grayScale.black}`,
      fontSize: "14px",
      fontWeight: "500",
      width: "24px",
      height: "24px",
      borderRadius: "6px",
      lineHeight: "24px"
    },
    ".MuiDayCalendar-weekContainer": {
      boxSizing: "content-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "18px",
      margin: "0px",
      paddingTop: "8px",
      paddingBottom: "8px"
    },
    ".Mui-selected": {
      color: `${theme.colors.grayScale.white}`,
      backgroundColor: `${theme.colors.mainColor.main4} !important`,
      borderRadius: "6px"
    },
    ".MuiPickersDay-root:hover": {
      backgroundColor: `${theme.colors.mainColor.main2}`,
      borderRadius: "6px"
    },
    ".MuiPickersDay-root:focus": {
      backgroundColor: `${theme.colors.mainColor.main2}`,
      borderRadius: "6px"
    },
    ".MuiYearCalendar-root": {
      display: "flex",
      width: "263px",
      padding: "0px"
    },
    ".MuiPickersYear-root": {
      height: "36px"
    },
    ".MuiPickersYear-yearButton": {
      width: "100%",
      height: "24px",
      margin: "4px",
      padding: "0px",
      fontSize: "14px",
      fontWeight: "500"
    },
    ".MuiPickersYear-yearButton:hover": {
      backgroundColor: `${theme.colors.mainColor.main2}`,
      borderRadius: "6px"
    }
  };
});
const rightArrowIcon = _styled.default.div`
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url("/images/icon/arrow/arrow_right_admin_8.svg");
  background-repeat: no-repeat;
  background-position: center;
`;
const LeftArrowIcon = _styled.default.div`
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url("/images/icon/arrow/arrow_left_admin_8.svg");
  background-repeat: no-repeat;
  background-position: center;
`;
const CHECKBOX_STYLE = {
  position: "absolute",
  right: "20px",
  bottom: "16px",
  fontSize: "14px",
  lineHeight: "14px",
  zIndex: "1"
};