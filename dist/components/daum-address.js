"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DaumAddress;
var _reactDaumPostcode = _interopRequireDefault(require("react-daum-postcode"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function DaumAddress(_ref) {
  let {
    setDaumpostOpen,
    onSelect
  } = _ref;
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setDaumpostOpen(false);
    onSelect(data);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDaumPostcode.default, {
    onComplete: handleComplete
  });
}