"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var locale_1 = require("date-fns/locale");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var checkbox_1 = __importDefault(require("./checkbox"));
var styled_1 = __importDefault(require("@emotion/styled"));
exports.default = (0, react_1.forwardRef)(function DatePicker(_a, ref) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, disabled = _a.disabled, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.isEndDate, isEndDate = _b === void 0 ? false : _b, style = _a.style;
    var _c = (0, react_1.useState)(false), visible = _c[0], setVisible = _c[1];
    return ((0, jsx_runtime_1.jsx)(x_date_pickers_1.LocalizationProvider, __assign({ dateAdapter: AdapterDateFns_1.AdapterDateFns, adapterLocale: locale_1.ko }, { children: (0, jsx_runtime_1.jsx)(CustomDatePicker, { name: name, sx: style, value: value, onChange: function (e) { return onChange(e, name); }, minDate: new Date(minDate), maxDate: new Date(maxDate), format: "yyyy.MM.dd", disabled: disabled, slots: {
                toolbar: function () { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isEndDate && ((0, jsx_runtime_1.jsx)(checkbox_1.default, { label: "\uC885\uB8CC\uC77C \uC5C6\uC74C", size: "16px", gap: "8px", checked: value === null ? true : false, onChange: function (e) { return onChange(e.target.checked, "noEndDate"); }, style: CHECKBOX_STYLE })) })); },
                desktopPaper: desktopPaper,
                layout: layout,
                rightArrowIcon: rightArrowIcon,
                leftArrowIcon: LeftArrowIcon,
                openPickerIcon: function () { return ((0, jsx_runtime_1.jsx)(image_1.default, { src: disabled
                        ? "https://image.thetak.net/asset/product/images/calender_admin_3.svg"
                        : visible
                            ? "https://image.thetak.net/asset/product/images/calender_admin_main.svg"
                            : "https://image.thetak.net/asset/product/images/calender_admin_3.svg", width: 16, height: 16, alt: "calendar" })); },
            }, visible: visible, onOpen: function () { return setVisible(true); }, onClose: function () { return setVisible(false); } }) })));
});
var CustomDatePicker = (0, styled_1.default)(x_date_pickers_1.DatePicker)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 8px;\n\n  .MuiOutlinedInput-root {\n    width: 110px;\n    height: 32px;\n    padding: 0px;\n    border: ", ";\n    border-radius: 8px;\n    font-size: 12px;\n    font-weight: 400;\n    z-index: 1;\n  }\n  .MuiOutlinedInput-input {\n    width: 80px;\n    padding: 0px;\n    padding-left: 7px;\n    color: ", ";\n    z-index: 1;\n    :focus {\n      color: ", ";\n    }\n  }\n  .MuiIconButton-root {\n    display: block;\n    padding: 0px;\n    padding-right: 18px;\n  }\n  .MuiIconButton-root:hover {\n    background-color: transparent;\n  }\n  .MuiOutlinedInput-notchedOutline {\n    display: none;\n  }\n  .Mui-disabled {\n    -webkit-text-fill-color: ", ";\n  }\n  .MuiTouchRipple-root {\n    display: none;\n  }\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 8px;\n\n  .MuiOutlinedInput-root {\n    width: 110px;\n    height: 32px;\n    padding: 0px;\n    border: ", ";\n    border-radius: 8px;\n    font-size: 12px;\n    font-weight: 400;\n    z-index: 1;\n  }\n  .MuiOutlinedInput-input {\n    width: 80px;\n    padding: 0px;\n    padding-left: 7px;\n    color: ", ";\n    z-index: 1;\n    :focus {\n      color: ", ";\n    }\n  }\n  .MuiIconButton-root {\n    display: block;\n    padding: 0px;\n    padding-right: 18px;\n  }\n  .MuiIconButton-root:hover {\n    background-color: transparent;\n  }\n  .MuiOutlinedInput-notchedOutline {\n    display: none;\n  }\n  .Mui-disabled {\n    -webkit-text-fill-color: ", ";\n  }\n  .MuiTouchRipple-root {\n    display: none;\n  }\n"])), function (_a) {
    var disabled = _a.disabled, theme = _a.theme;
    return disabled
        ? "".concat(theme.colors.grayScale.gray4)
        : "".concat(theme.colors.grayScale.white);
}, function (_a) {
    var theme = _a.theme;
    return "1px solid ".concat(theme.colors.grayScale.gray3);
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.grayScale.black);
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.grayScale.black);
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.grayScale.gray25);
});
var desktopPaper = (0, styled_1.default)(material_1.Paper)({
    width: "303px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 18px -4px rgba(16, 24, 40, 0.08)",
});
// 수정된 코드
var layout = (0, styled_1.default)(x_date_pickers_1.PickersLayout)(function (_a) {
    var theme = _a.theme;
    return ({
        ".MuiDateCalendar-root": {
            width: "263px",
            height: "100%",
            margin: "0px",
        },
        ".MuiPickersCalendarHeader-root": {
            margin: "0",
            marginBottom: "32px",
            padding: "0",
            maxHeight: "23px",
            minHeight: "23px",
        },
        ".MuiPickersCalendarHeader-labelContainer": {
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translate(-50%)",
            margin: "0",
            marginLeft: "8px",
            height: "23px",
        },
        ".MuiPickersCalendarHeader-label": {
            fontSize: "18px",
            fontWeight: "700",
        },
        ".MuiPickersCalendarHeader-switchViewButton": {
            color: "".concat(theme.colors.grayScale.black), // theme 객체 접근
        },
        ".MuiPickersCalendarHeader-switchViewButton:hover": {
            backgroundColor: "transparent",
        },
        ".MuiButtonBase-root": {
            boxShadow: "border-box",
            width: "24px",
            height: "24px",
            padding: "6px",
        },
        ".MuiIconButton-edgeStart": {
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "0px",
        },
        ".MuiIconButton-edgeEnd": {
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "0px",
        },
        ".MuiPickersArrowSwitcher-button": {
            backgroundColor: "transparent",
        },
        ".MuiPickersArrowSwitcher-button:hover": {
            backgroundColor: "transparent",
        },
        ".MuiTouchRipple-root": {
            display: "none",
        },
        ".MuiDayCalendar-header": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "24px",
            span: {
                color: "#2D31A6",
                fontSize: "14px",
            },
            "span:nth-of-type(1)": {
                color: "#FEA3B4",
            },
            "span:nth-of-type(7)": {
                color: "#8098F9",
            },
            ".MuiTypography-root": {
                width: "24px",
                height: "24px",
                padding: "6px",
                lineHeight: "24px",
            },
        },
        ".MuiPickersSlideTransition-root": {
            minHeight: "210px",
        },
        ".MuiPickersDay-root": {
            color: "".concat(theme.colors.grayScale.black),
            fontSize: "14px",
            fontWeight: "500",
            width: "24px",
            height: "24px",
            borderRadius: "6px",
            lineHeight: "24px",
        },
        ".MuiDayCalendar-weekContainer": {
            boxSizing: "content-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "18px",
            margin: "0px",
            paddingTop: "8px",
            paddingBottom: "8px",
        },
        ".Mui-selected": {
            color: "".concat(theme.colors.grayScale.white),
            backgroundColor: "".concat(theme.colors.mainColor.main4, " !important"),
            borderRadius: "6px",
        },
        ".MuiPickersDay-root:hover": {
            backgroundColor: "".concat(theme.colors.mainColor.main2),
            borderRadius: "6px",
        },
        ".MuiPickersDay-root:focus": {
            backgroundColor: "".concat(theme.colors.mainColor.main2),
            borderRadius: "6px",
        },
        ".MuiYearCalendar-root": {
            display: "flex",
            width: "263px",
            padding: "0px",
        },
        ".MuiPickersYear-root": {
            height: "36px",
        },
        ".MuiPickersYear-yearButton": {
            width: "100%",
            height: "24px",
            margin: "4px",
            padding: "0px",
            fontSize: "14px",
            fontWeight: "500",
        },
        ".MuiPickersYear-yearButton:hover": {
            backgroundColor: "".concat(theme.colors.mainColor.main2),
            borderRadius: "6px",
        },
    });
});
var rightArrowIcon = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n  background-image: url(\"/images/icon/arrow/arrow_right_admin_8.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n"], ["\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n  background-image: url(\"/images/icon/arrow/arrow_right_admin_8.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n"])));
var LeftArrowIcon = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n  background-image: url(\"/images/icon/arrow/arrow_left_admin_8.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n"], ["\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n  background-image: url(\"/images/icon/arrow/arrow_left_admin_8.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n"])));
var CHECKBOX_STYLE = {
    position: "absolute",
    right: "20px",
    bottom: "16px",
    fontSize: "14px",
    lineHeight: "14px",
    zIndex: "1",
};
var templateObject_1, templateObject_2, templateObject_3;
