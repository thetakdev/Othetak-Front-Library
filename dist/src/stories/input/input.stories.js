"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdornmentInput = exports.PrimaryInput = void 0;
var input_1 = __importDefault(require("@/components/input"));
var meta = {
    title: "components/Input/Input",
    component: input_1.default,
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: ["small", "big", "tiny", "responsive"],
            control: { type: "radio" },
        },
        adornment: {
            position: {
                options: ["start", 'end'],
                control: { type: "radio" },
            },
        },
    },
};
exports.default = meta;
exports.PrimaryInput = {
    args: {
        className: "",
        disabled: false,
        size: "small",
    },
};
exports.AdornmentInput = {
    args: {
        className: "",
        disabled: false,
        size: "small",
        adornment: {
            adornment: "img",
            position: "end",
            gap: 0
        },
    },
};
