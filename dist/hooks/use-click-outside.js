"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useClickOutSide = function (refs, onFocusOut) {
  let initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const [visible, setVisible] = (0, _react.useState)(initialState);
  (0, _react.useEffect)(() => {
    const checkIfClickedOutside = e => {
      if (refs.ref2) {
        if (refs.ref1.current && !refs.ref1.current.contains(e.target) && refs?.ref2?.current && !refs?.ref2.current.contains(e.target)) {
          setVisible(false);
          onFocusOut && onFocusOut();
        }
      } else {
        if (refs.ref1.current && !refs.ref1.current.contains(e.target)) {
          setVisible(false);
          onFocusOut && onFocusOut();
        }
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [visible]);
  return {
    visible,
    setVisible
  };
};
var _default = exports.default = useClickOutSide;