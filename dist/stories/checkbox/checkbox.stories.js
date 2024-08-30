"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SquareCheckbox = exports.CircleCheckbox = void 0;
var _checkbox = _interopRequireDefault(require("../../components/checkbox"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Checkbox/Checkbox",
  component: _checkbox.default,
  tags: ["autodocs"]
};
var _default = exports.default = meta;
const SquareCheckbox = exports.SquareCheckbox = {
  args: {
    shape: "square",
    label: "라벨!"
  }
};
const CircleCheckbox = exports.CircleCheckbox = {
  args: {
    shape: "circle",
    label: "라벨!",
    requiredPosition: "after"
  }
};