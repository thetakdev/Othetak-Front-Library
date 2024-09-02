"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimarySelect = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var select_1 = __importDefault(require("@/components/select"));
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var meta = {
    title: "components/Select/Select",
    component: select_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.PrimarySelect = {
    render: function () {
        var initialParams = {
            userTypeCode: 2,
        };
        var _a = (0, react_hook_form_1.useForm)({
            defaultValues: initialParams,
        }), control = _a.control, getValues = _a.getValues;
        var OPTIONS = [
            { label: "선택1", value: 1 },
            { label: "선택2", value: 2 },
            { label: "선택3", value: 3 },
            { label: "선택4", value: 4 },
            { label: "선택1", value: 5 },
            { label: "선택2", value: 6 },
            { label: "선택3", value: 7 },
            { label: "선택4", value: 8 },
            { label: "선택1", value: 1 },
            { label: "선택2", value: 2 },
            { label: "선택3", value: 3 },
            { label: "선택4", value: 4 },
            { label: "선택1", value: 5 },
            { label: "선택2", value: 6 },
            { label: "선택3", value: 7 },
            { label: "선택4", value: 8 },
            { label: "선택1", value: 1 },
            { label: "선택2", value: 2 },
            { label: "선택3", value: 3 },
            { label: "선택4", value: 4 },
            { label: "선택1", value: 5 },
            { label: "선택2", value: 6 },
            { label: "선택3", value: 7 },
            { label: "선택4", value: 8 },
        ];
        (0, react_1.useEffect)(function () {
            console.log("getValues", getValues());
        }, [getValues()]);
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Select" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "tiny", placeholder: "\uC120\uD0DD" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "tiny", placeholder: "\uC120\uD0DD", disabled: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "MultiSelect" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "tiny", placeholder: "\uC120\uD0DD", multiSelect: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\uC804\uCCB4 \uC120\uD0DD" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "tiny", placeholder: "\uC120\uD0DD", multiSelect: true, allCheck: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "SIZE" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "small", multiSelect: true }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "normal" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "big" }), (0, jsx_runtime_1.jsx)(select_1.default, { control: control, name: "userTypeCode", option: OPTIONS, size: "responsive" })] })] }));
    },
};
