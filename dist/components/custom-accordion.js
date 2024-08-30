"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomAccordionSummary = exports.CustomAccordionDetails = void 0;
exports.default = CustomAccordion;
var _material = require("@mui/material");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _image = _interopRequireDefault(require("next/image"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CustomAccordion(_ref) {
  let {
    open,
    square = true,
    style,
    summary,
    details,
    defaultExpanded = true
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Accordion, {
    disableGutters: true,
    square: square,
    defaultExpanded: defaultExpanded,
    expanded: open,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CustomAccordionSummary, {
      expandIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
        src: "https://image.thetak.net/asset/product/images/arrow_down_gray_25.svg",
        alt: "accordion-arrow",
        width: 15,
        height: 15
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SummaryContainer, {
        children: summary
      })
    }), details]
  });
}
const Accordion = (0, _styled.default)(_material.Accordion)`
  background-color: transparent;
  box-shadow: none;

  ::before {
    height: 0px;
  }
`;
const CustomAccordionSummary = exports.CustomAccordionSummary = (0, _styled.default)(_material.AccordionSummary)`
  & .MuiAccordionSummary-content {
    margin: 0;
  }

  &.MuiAccordionSummary-root {
    padding: 0;
    min-height: 0;
  }

  &.Mui-focusVisible {
    background-color: transparent;
  }
  .MuiAccordionSummary-expandIconWrapper {
    margin-right: 24px !important;
  }
`;
const SummaryContainer = _styled.default.div`
  width: 100%;
  cursor: default;
`;
const CustomAccordionDetails = exports.CustomAccordionDetails = (0, _styled.default)(_material.AccordionDetails)`
  &.MuiAccordionDetails-root {
    padding: 0;
  }
`;