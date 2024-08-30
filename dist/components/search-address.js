"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _image = _interopRequireDefault(require("next/image"));
var _reactDaumPostcode = _interopRequireDefault(require("react-daum-postcode"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SearchAddress = _ref => {
  let {
    open,
    onClose,
    onSelect
  } = _ref;
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    onClose(false);
    onSelect(data);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
    open: open,
    onClose: onClose,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: 500
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        onClick: onClose,
        size: "small",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
          src: `https://image.thetak.net/asset/product/images/x_close_gray_2.svg`,
          width: 28,
          height: 28,
          alt: "close"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDaumPostcode.default, {
        onComplete: handleComplete
      })]
    })
  });
};
var _default = exports.default = SearchAddress;