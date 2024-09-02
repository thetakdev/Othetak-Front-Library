"use strict";
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
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var react_daum_postcode_1 = __importDefault(require("react-daum-postcode"));
var SearchAddress = function (_a) {
    var open = _a.open, onClose = _a.onClose, onSelect = _a.onSelect;
    var handleComplete = function (data) {
        var fullAddress = data.address;
        var extraAddress = "";
        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? ", ".concat(data.buildingName) : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? " (".concat(extraAddress, ")") : "";
        }
        onClose(false);
        onSelect(data);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Modal, __assign({ open: open, onClose: onClose, sx: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: 500,
            } }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ onClick: onClose, size: "small" }, { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: "https://image.thetak.net/asset/product/images/x_close_gray_2.svg", width: 28, height: 28, alt: "close" }) })), (0, jsx_runtime_1.jsx)(react_daum_postcode_1.default, { onComplete: handleComplete })] })) })));
};
exports.default = SearchAddress;
