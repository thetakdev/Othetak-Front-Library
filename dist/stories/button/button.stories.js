"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SecondaryButton = exports.PrimaryButton = void 0;
var _button = _interopRequireDefault(require("../../components/button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Button/Button",
  component: _button.default,
  tags: ['autodocs']
};
var _default = exports.default = meta;
const PrimaryButton = exports.PrimaryButton = {
  args: {
    className: "",
    variant: "primary",
    isLoading: false,
    disabled: false,
    onClick: () => {},
    style: {},
    children: "primary"
  }
};
const SecondaryButton = exports.SecondaryButton = {
  args: {
    className: "",
    variant: "secondary",
    isLoading: false,
    disabled: false,
    onClick: () => {},
    style: {},
    children: "secondary"
  }
};