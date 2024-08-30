"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptionContainer = exports.Description = void 0;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DescriptionContainer = exports.DescriptionContainer = (0, _styled.default)(_material.Grid)`
  position: relative;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.mainColor.main;
}};
  border-collapse: collapse;

  &::after {
    display: ${_ref2 => {
  let {
    isLoading
  } = _ref2;
  return isLoading ? "block" : "none";
}};
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.05) !important;
  }

  .loader {
    display: ${_ref3 => {
  let {
    isLoading
  } = _ref3;
  return isLoading ? "block" : "none !important";
}};
  }
`;
const Description = exports.Description = (0, _styled.default)(_material.Grid)`
  display: flex;
  border-bottom: 1px solid ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.colors.mainColor.main3;
}};

  border-collapse: collapse;
  /* &:last-child&:not(:first-child) {
    border-bottom: none;
  } */

  &.noBorder {
    border-bottom: none;
  }

  & > label {
    border-collapse: collapse;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 48px;
    height: 100%;
    color: ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.colors.grayScale.black;
}};
    font-size: 16px;
    font-weight: 500;
    background-color: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.colors.mainColor.main1;
}};
    width: 110px;
  }
  .require:after {
    content: "*";
    color: ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.colors.errorColor.errorMain;
}};
    margin-left: 2px;
  }

  .content {
    display: flex;
    align-items: center;
    flex: 1;
    background: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;