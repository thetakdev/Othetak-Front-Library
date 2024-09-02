"use strict";
"use client";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var image_1 = __importDefault(require("next/image"));
var button_1 = __importDefault(require("@/components/button"));
var react_1 = require("react");
var common_1 = require("@/styles/common");
var input_1 = __importDefault(require("@/components/input"));
var common_2 = require("@/static/common");
var ImageSetting = function (_a) {
    var onChange = _a.onChange, onClickRemove = _a.onClickRemove, _b = _a.type, type = _b === void 0 ? "multi" : _b, path = _a.path, name = _a.name, _c = _a.isEdit, isEdit = _c === void 0 ? true : _c;
    var fileRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [path ? ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: "".concat(common_2.ASSET_IMAGE_URL).concat(path), style: { borderRadius: 8 }, width: 137, height: 134, alt: "logo", className: "image" }), isEdit && ((0, jsx_runtime_1.jsx)(image_1.default, { onClick: onClickRemove, src: "https://image.thetak.net/asset/product/images/bin_trash_gray_1.svg", className: "hoverItem", width: 14, height: 14, alt: "trash" }))] }))) : ((0, jsx_runtime_1.jsx)("div", { style: {
                    background: common_1.COLORS.grayScale.gray4,
                    borderRadius: 8,
                    width: 137,
                    height: 134,
                } })), isEdit ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "gray_zone" }, { children: ["\u2022 \uC5C5\uB85C\uB4DC \uC0AC\uC774\uC988: 1000px*1000px", (0, jsx_runtime_1.jsx)("br", {}), "\u2022 \uB178\uCD9C \uC0AC\uC774\uC988: 500px*500px", (0, jsx_runtime_1.jsx)("br", {}), "\u2022 \uC5C5\uB85C\uB4DC \uAC00\uB2A5 \uD615\uC2DD: jpg, jpeg, gif, png, bmp", (0, jsx_runtime_1.jsx)("br", {})] })), (0, jsx_runtime_1.jsx)(input_1.default, { value: name, size: "small", placeholder: "\uC5C5\uB85C\uB4DC\uD55C \uD30C\uC77C\uBA85\uC774 \uB178\uCD9C\uB429\uB2C8\uB2E4.", style: { width: "100%" }, 
                        // disabled
                        adornment: {
                            adornment: ((0, jsx_runtime_1.jsx)(button_1.default, __assign({ onClick: function () { return fileRef.current.click(); }, style: { width: 28, height: 28, padding: 0, borderRadius: 6 } }, { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: "https://image.thetak.net/asset/product/images/export_arrow_white.svg", width: "14", height: "14", alt: "upload-image" }) }))),
                            position: "end",
                            gap: 2,
                        } })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})), (0, jsx_runtime_1.jsx)("input", { ref: fileRef, hidden: true, max: 3, accept: ".jpg, .jpeg, .gif, .png, .bmp", type: "file", onChange: function (e) { return onChange(e, type); } })] }));
};
exports.default = ImageSetting;
var Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .wrapper {\n    position: relative;\n    display: inline-block;\n  }\n  .hoverItem {\n    display: none;\n    cursor: pointer;\n  }\n  .wrapper:hover {\n    .hoverItem {\n      display: block;\n      position: absolute;\n      right: 8px;\n      top: 8px;\n    }\n  }\n\n  .gray_zone {\n    width: 315px;\n    padding: 6px 8px;\n    background: ", ";\n    font-size: 10px;\n    line-height: 18px;\n    margin: 4px 0px;\n  }\n"], ["\n  .wrapper {\n    position: relative;\n    display: inline-block;\n  }\n  .hoverItem {\n    display: none;\n    cursor: pointer;\n  }\n  .wrapper:hover {\n    .hoverItem {\n      display: block;\n      position: absolute;\n      right: 8px;\n      top: 8px;\n    }\n  }\n\n  .gray_zone {\n    width: 315px;\n    padding: 6px 8px;\n    background: ", ";\n    font-size: 10px;\n    line-height: 18px;\n    margin: 4px 0px;\n  }\n"])), common_1.COLORS.grayScale.gray4);
var templateObject_1;
