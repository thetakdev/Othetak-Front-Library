"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Alert;
var _material = require("@mui/material");
var _common = require("../styles/common");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _button = _interopRequireDefault(require("./button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Alert(_ref) {
  let {
    open,
    title,
    subTitle,
    cancelText = "닫기",
    confirmText = "확인",
    bottomContent,
    hideBottomContent = false,
    isLoading = false,
    onCancel,
    onConfirm
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(E_Modal, {
    open: open,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(E_Container, {
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "title",
        children: title
      }), subTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "subTitle",
        children: subTitle
      }), hideBottomContent === false && /*#__PURE__*/(0, _jsxRuntime.jsx)(E_ButtonWrapper, {
        children: bottomContent ? bottomContent : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button.default, {
            variant: "secondary",
            onClick: onCancel,
            style: BUTTON_STYLE,
            children: cancelText
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.default, {
            isLoading: isLoading,
            onClick: onConfirm,
            style: BUTTON_STYLE,
            children: confirmText
          })]
        })
      })]
    })
  });
}
const E_Modal = (0, _styled.default)(_material.Modal)`
  z-index: 9999;
`;
const E_Container = _styled.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 308px;
  padding: 32px 80px;
  background-color: ${_common.COLORS.grayScale.white};
  border-radius: 16px;
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 18px -4px rgba(16, 24, 40, 0.08);

  &:focus {
    outline: none;
  }

  .title {
    color: ${_common.COLORS.grayScale.black};
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    white-space: pre-wrap;
  }

  .subTitle {
    margin-top: 20px;
    color: ${_common.COLORS.grayScale.gray2};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    white-space: pre-wrap;
  }
`;
const E_ButtonWrapper = _styled.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`;
const BUTTON_STYLE = {
  width: "106px",
  height: "36px"
};