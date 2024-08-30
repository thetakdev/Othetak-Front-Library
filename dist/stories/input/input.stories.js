"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimaryInput = exports.AdornmentInput = void 0;
var _input = _interopRequireDefault(require("../../components/input"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  title: "components/Input/Input",
  component: _input.default,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "big", "tiny", "responsive"],
      control: {
        type: "radio"
      }
    },
    adornment: {
      position: {
        options: ["start", 'end'],
        control: {
          type: "radio"
        }
      }
    }
  }
};
var _default = exports.default = meta;
const PrimaryInput = exports.PrimaryInput = {
  args: {
    className: "",
    disabled: false,
    size: "small"
  }
};
const AdornmentInput = exports.AdornmentInput = {
  args: {
    className: "",
    disabled: false,
    size: "small",
    adornment: {
      adornment: "img",
      position: "end",
      gap: 0
    }
  }
};