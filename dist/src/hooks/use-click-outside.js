"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useClickOutSide = function (refs, onFocusOut, initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = (0, react_1.useState)(initialState), visible = _a[0], setVisible = _a[1];
    (0, react_1.useEffect)(function () {
        var checkIfClickedOutside = function (e) {
            var _a;
            if (refs.ref2) {
                if (refs.ref1.current &&
                    !refs.ref1.current.contains(e.target) &&
                    ((_a = refs === null || refs === void 0 ? void 0 : refs.ref2) === null || _a === void 0 ? void 0 : _a.current) &&
                    !(refs === null || refs === void 0 ? void 0 : refs.ref2.current.contains(e.target))) {
                    setVisible(false);
                    onFocusOut && onFocusOut();
                }
            }
            else {
                if (refs.ref1.current && !refs.ref1.current.contains(e.target)) {
                    setVisible(false);
                    onFocusOut && onFocusOut();
                }
            }
        };
        document.addEventListener('click', checkIfClickedOutside);
        return function () {
            document.removeEventListener('click', checkIfClickedOutside);
        };
    }, [visible]);
    return { visible: visible, setVisible: setVisible };
};
exports.default = useClickOutSide;
