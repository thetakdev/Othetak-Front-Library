"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageGallery;
var _image = _interopRequireDefault(require("next/image"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ImageGallery() {
  const [images, setImages] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    async function fetchImages() {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };
  const getFileName = fileName => {
    return `<${fileName.replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()).replace(/\.[^/.]+$/, "").replace(/^(.)/, (match, group1) => group1.toUpperCase())}IC />`;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "50px",
      padding: "20px"
    },
    children: [...images].map((image, index) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        cursor: "pointer",
        textAlign: "left",
        width: 50,
        height: 50,
        padding: "20px",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.01)"
      },
      onClick: () => copyToClipboard(getFileName(image.name)),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
        src: image.path,
        alt: image.name,
        width: 50,
        height: 50
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          whiteSpace: "nowrap",
          fontSize: "1rem",
          textAlign: "left",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 20
        },
        children: getFileName(image.name)
      })]
    }, index))
  });
}