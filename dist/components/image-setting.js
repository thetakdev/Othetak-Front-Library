"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _image = _interopRequireDefault(require("next/image"));
var _button = _interopRequireDefault(require("./button"));
var _react = require("react");
var _common = require("../styles/common");
var _input = _interopRequireDefault(require("./input"));
var _common2 = require("../static/common");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ImageSetting = _ref => {
  let {
    onChange,
    onClickRemove,
    type = "multi",
    path,
    name,
    isEdit = true
  } = _ref;
  const fileRef = (0, _react.useRef)(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Container, {
    children: [path ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
        src: `${_common2.ASSET_IMAGE_URL}${path}`,
        style: {
          borderRadius: 8
        },
        width: 137,
        height: 134,
        alt: "logo",
        className: "image"
      }), isEdit && /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
        onClick: onClickRemove,
        src: "https://image.thetak.net/asset/product/images/bin_trash_gray_1.svg",
        className: "hoverItem",
        width: 14,
        height: 14,
        alt: "trash"
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        background: _common.COLORS.grayScale.gray4,
        borderRadius: 8,
        width: 137,
        height: 134
      }
    }), isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "gray_zone",
        children: ["\u2022 \uC5C5\uB85C\uB4DC \uC0AC\uC774\uC988: 1000px*1000px", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "\u2022 \uB178\uCD9C \uC0AC\uC774\uC988: 500px*500px", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "\u2022 \uC5C5\uB85C\uB4DC \uAC00\uB2A5 \uD615\uC2DD: jpg, jpeg, gif, png, bmp", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_input.default, {
        value: name,
        size: "small",
        placeholder: "\uC5C5\uB85C\uB4DC\uD55C \uD30C\uC77C\uBA85\uC774 \uB178\uCD9C\uB429\uB2C8\uB2E4.",
        style: {
          width: "100%"
        }
        // disabled
        ,
        adornment: {
          adornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.default, {
            onClick: () => fileRef.current.click(),
            style: {
              width: 28,
              height: 28,
              padding: 0,
              borderRadius: 6
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
              src: "https://image.thetak.net/asset/product/images/export_arrow_white.svg",
              width: "14",
              height: "14",
              alt: "upload-image"
            })
          }),
          position: "end",
          gap: 2
        }
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: fileRef,
      hidden: true,
      max: 3,
      accept: ".jpg, .jpeg, .gif, .png, .bmp",
      type: "file",
      onChange: e => onChange(e, type)
    })]
  });
};
var _default = exports.default = ImageSetting;
const Container = _styled.default.div`
  .wrapper {
    position: relative;
    display: inline-block;
  }
  .hoverItem {
    display: none;
    cursor: pointer;
  }
  .wrapper:hover {
    .hoverItem {
      display: block;
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }

  .gray_zone {
    width: 315px;
    padding: 6px 8px;
    background: ${_common.COLORS.grayScale.gray4};
    font-size: 10px;
    line-height: 18px;
    margin: 4px 0px;
  }
`;