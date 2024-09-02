"use strict";
'use client';
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
var material_1 = require("@mui/material");
var react_hook_form_1 = require("react-hook-form");
var dayjs_1 = __importDefault(require("dayjs"));
var date_picker_1 = __importDefault(require("@/components/date-picker"));
var common_1 = require("@/styles/common");
function DateComponent(_a) {
    var control = _a.control, setValue = _a.setValue, getValues = _a.getValues, watch = _a.watch, alignment = _a.alignment, setAlignment = _a.setAlignment;
    var handleChangeDate = function (date, name) {
        setValue(name, date);
    };
    // 날짜 토글 버튼 선택
    var handleChange = function (event, newAlignment) {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            setValue('startDate', (0, dayjs_1.default)().subtract(Number(newAlignment), 'day').toDate());
            setValue('endDate', new Date());
            if (newAlignment === '-1') {
                setValue('endDate', null);
                setValue('startDate', null);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: { display: 'flex', alignItems: 'center' } }, { children: [(0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: "startDate", control: control, render: function (_a) {
                    var field = _a.field;
                    return ((0, jsx_runtime_1.jsx)(date_picker_1.default, __assign({}, field, { value: watch('startDate') ? new Date(getValues('startDate')) : null, maxDate: watch('endDate') ? new Date(getValues('endDate')) : new Date(new Date().setFullYear(new Date().getFullYear() + 1)), onChange: handleChangeDate })));
                } }), (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ sx: { mx: '3px' } }, { children: "~" })), (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: "endDate", control: control, render: function (_a) {
                    var field = _a.field;
                    return ((0, jsx_runtime_1.jsx)(date_picker_1.default, __assign({}, field, { value: watch('endDate') ? new Date(getValues('endDate')) : null, minDate: watch('startDate') && new Date(getValues('startDate')), onChange: handleChangeDate })));
                } }), (0, jsx_runtime_1.jsxs)(StyledToggleButtonGroup, __assign({ sx: { ml: '8px', gap: '4px' }, value: alignment, size: "small", exclusive: true, onChange: handleChange, "aria-label": "Platform" }, { children: [(0, jsx_runtime_1.jsx)(material_1.ToggleButton, __assign({ disableRipple: true, value: "-1" }, { children: "\uC804\uCCB4" })), (0, jsx_runtime_1.jsx)(material_1.ToggleButton, __assign({ disableRipple: true, value: "0" }, { children: "\uC624\uB298" })), (0, jsx_runtime_1.jsx)(material_1.ToggleButton, __assign({ disableRipple: true, value: "1" }, { children: "\uC5B4\uC81C" })), (0, jsx_runtime_1.jsx)(material_1.ToggleButton, __assign({ disableRipple: true, value: "30" }, { children: "-30\uC77C" })), (0, jsx_runtime_1.jsx)(material_1.ToggleButton, __assign({ disableRipple: true, value: "90" }, { children: "-90\uC77C" }))] }))] })));
}
var StyledToggleButtonGroup = (0, material_1.styled)(material_1.ToggleButtonGroup)(function () { return ({
    '.MuiToggleButton-root': {
        color: common_1.COLORS.mainColor.main,
    },
    '.MuiButtonBase-root.Mui-selected': {
        color: '#FFFFFF',
        backgroundColor: common_1.COLORS.mainColor.main,
        '&:hover': {
            backgroundColor: common_1.COLORS.mainColor.main,
        },
    },
    '.MuiToggleButtonGroup-grouped': {
        height: '28px',
        minWidth: '39px',
        borderRadius: '8px',
        border: "1px solid ".concat(common_1.COLORS.mainColor.main),
        '&:not(:first-of-type)': {
            borderRadius: '8px',
            border: "1px solid ".concat(common_1.COLORS.mainColor.main),
        },
        '&:not(:last-of-type)': {
            borderRadius: '8px',
        },
        '&:first-of-type': {
            borderRadius: '8px',
        },
    },
}); });
exports.default = DateComponent;
