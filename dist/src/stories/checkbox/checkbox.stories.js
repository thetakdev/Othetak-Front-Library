"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCheckbox = exports.SquareCheckbox = void 0;
var checkbox_1 = __importDefault(require("@/components/checkbox"));
var meta = {
    title: "components/Checkbox/Checkbox",
    component: checkbox_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.SquareCheckbox = {
    args: {
        shape: "square",
        label: "라벨!",
    },
};
exports.CircleCheckbox = {
    args: {
        shape: "circle",
        label: "라벨!",
        requiredPosition: "after",
    },
};
