"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondaryButton = exports.PrimaryButton = void 0;
var button_1 = __importDefault(require("@/components/button"));
var meta = {
    title: "components/common/atoms/button/button",
    component: button_1.default,
    tags: ['autodocs'],
};
exports.default = meta;
exports.PrimaryButton = {
    args: {
        className: "",
        variant: "primary",
        isLoading: false,
        disabled: false,
        onClick: function () { },
        style: {},
        children: "primary",
    },
};
exports.SecondaryButton = {
    args: {
        className: "",
        variant: "secondary",
        isLoading: false,
        disabled: false,
        onClick: function () { },
        style: {},
        children: "secondary",
    },
};
