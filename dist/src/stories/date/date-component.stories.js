"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateComponent_1 = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var date_component_1 = __importDefault(require("@/components/date-component"));
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var meta = {
    title: "components/Date/DateComponent",
    component: date_component_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.DateComponent_1 = {
    render: function () {
        var initialParams = {
            startDate: null,
            endDate: null,
            title: null,
        };
        var _a = (0, react_hook_form_1.useForm)({
            defaultValues: initialParams,
        }), control = _a.control, getValues = _a.getValues, setValue = _a.setValue, watch = _a.watch;
        var _b = (0, react_1.useState)("-1"), alignment = _b[0], setAlignment = _b[1];
        return ((0, jsx_runtime_1.jsx)(date_component_1.default, { control: control, setValue: setValue, getValues: getValues, watch: watch, alignment: alignment, setAlignment: setAlignment }));
    },
};
