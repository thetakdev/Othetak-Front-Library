"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker_1 = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var date_picker_1 = __importDefault(require("@/components/date-picker"));
var meta = {
    title: "components/Date/DatePicker",
    component: date_picker_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.DatePicker_1 = {
    render: function () {
        return (0, jsx_runtime_1.jsx)(date_picker_1.default, { value: new Date(), name: "startDate" });
    },
};
