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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
var react_1 = __importStar(require("react"));
var image_1 = __importDefault(require("next/image"));
var styled_1 = __importDefault(require("@emotion/styled"));
var material_1 = require("@mui/material");
var checkbox_1 = __importDefault(require("./checkbox"));
var use_click_outside_1 = __importDefault(require("@/hooks/use-click-outside"));
var react_2 = require("@emotion/react");
function Select(_a) {
    var className = _a.className, control = _a.control, name = _a.name, option = _a.option, _b = _a.imgSize, imgSize = _b === void 0 ? 14 : _b, selectStyle = _a.selectStyle, labelStyle = _a.labelStyle, optionStyle = _a.optionStyle, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "normal" : _d, _e = _a.status, status = _e === void 0 ? "normal" : _e, _f = _a.multiSelect, multiSelect = _f === void 0 ? false : _f, _g = _a.allCheck, allCheck = _g === void 0 ? false : _g, _h = _a.placeholder, placeholder = _h === void 0 ? "선택" : _h;
    var theme = (0, react_2.useTheme)();
    var ref = (0, react_1.useRef)(null);
    var _j = (0, react_1.useState)(false), visible = _j[0], setVisible = _j[1];
    (0, use_click_outside_1.default)({ ref1: ref }, function () { return setVisible(false); });
    var _k = (0, react_1.useState)([]), selectedOptions = _k[0], setSelectedOptions = _k[1];
    var _l = (0, react_1.useState)(option), filteredOptions = _l[0], setFilteredOptions = _l[1];
    var _m = (0, react_1.useState)(""), searchTerm = _m[0], setSearchTerm = _m[1];
    var _o = (0, react_1.useState)(0), focusedIndex = _o[0], setFocusedIndex = _o[1];
    (0, react_1.useEffect)(function () {
        if (visible === false) {
            setSearchTerm("");
            initOption();
        }
    }, [visible]);
    var initOption = function () {
        if (allCheck) {
            var allOption = { label: "전체", value: "all" };
            setFilteredOptions(__spreadArray([allOption], option, true));
        }
        else {
            setFilteredOptions(option);
        }
    };
    (0, react_1.useEffect)(function () {
        initOption();
    }, []);
    (0, react_1.useEffect)(function () {
        setFocusedIndex(0);
    }, [searchTerm]);
    // 옵션 선택
    var handleOptionClick = function (el, onChange) {
        if (multiSelect) {
            if (el.value === "all") {
                if (selectedOptions.length === option.length) {
                    setSelectedOptions([]);
                    onChange([]);
                }
                else {
                    setSelectedOptions(option);
                    onChange(option.map(function (opt) { return opt.value; }));
                }
            }
            else {
                var alreadySelected = selectedOptions.some(function (option) { return option.value === el.value; });
                var newSelectedOptions = alreadySelected
                    ? selectedOptions.filter(function (option) { return option.value !== el.value; })
                    : __spreadArray(__spreadArray([], selectedOptions, true), [el], false);
                setSelectedOptions(newSelectedOptions);
                onChange(newSelectedOptions.map(function (option) { return option.value; }));
            }
        }
        else {
            setSelectedOptions([el]);
            onChange(el.value);
            setVisible(false);
        }
    };
    // 검색
    var handleSearch = function (e) {
        var searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);
        setFilteredOptions(option.filter(function (opt) { return opt.label.toLowerCase().includes(searchValue); }));
    };
    // 방향키로 아이템 선택
    var handleKeyDown = function (e, onChange) {
        if (visible === false) {
            setVisible(true);
            return;
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setFocusedIndex(function (prev) { return (prev + 1) % filteredOptions.length; });
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            setFocusedIndex(function (prev) { return (prev - 1 + filteredOptions.length) % filteredOptions.length; });
        }
        else if (e.key === "Enter") {
            e.preventDefault();
            if (Boolean(filteredOptions[focusedIndex]) === false)
                return;
            handleOptionClick(filteredOptions[focusedIndex], onChange);
        }
    };
    var _p = (0, react_1.useState)(null), anchorEl = _p[0], setAnchorEl = _p[1];
    var idRef = (0, react_1.useRef)("simple-popper");
    // 셀렉트박스 클릭
    var handleClick = react_1.default.useCallback(function (event) {
        if (disabled)
            return;
        idRef.current = "simple-popper";
        setAnchorEl(event.currentTarget);
        setVisible(!visible);
        event.preventDefault();
    }, [visible, disabled]);
    var scrollContainer = (0, react_1.useRef)(null);
    // 방향키로 설정할 때 스크롤 위치 정하는 로직
    (0, react_1.useEffect)(function () {
        if (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.current) {
            var value = selectType[size].height;
            var numberOnly = parseInt(value, 10); // 결과: 44
            scrollContainer.current.scrollTop = (focusedIndex - 4) * numberOnly;
            return;
        }
    }, [focusedIndex, scrollContainer]);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b = _a.field, value = _b.value, onChange = _b.onChange;
            var labels = selectedOptions.map(function (option) { return option.label; }).join(", ");
            return ((0, jsx_runtime_1.jsxs)(EContainer, __assign({ className: className, ref: ref, visible: visible, onClick: handleClick, onKeyDown: function (e) { return handleKeyDown(e, onChange); }, tabIndex: 0, selectStyle: selectStyle, disabled: disabled, size: size, status: status, theme: theme }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "label-wrapper", style: labelStyle }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: searchTerm, disabled: disabled, onChange: handleSearch, placeholder: option.length === selectedOptions.length
                                    ? placeholder
                                    : labels || placeholder, style: { border: "none", outline: "none", width: "100%" } }), (0, jsx_runtime_1.jsx)(image_1.default, { src: "https://image.thetak.net/asset/product/images/".concat(disabled ? "arrow_down_gray_25" : "arrow_down_gray_2", ".svg"), alt: "arrow", width: imgSize, height: imgSize })] })), (0, jsx_runtime_1.jsx)(StyledPopper, __assign({ size: size, placement: "bottom", id: idRef.current, open: visible, anchorEl: anchorEl, style: selectStyle, theme: theme, ref: scrollContainer }, { children: filteredOptions.map(function (el, index) {
                            var isSelected = selectedOptions.some(function (option) { return option.value === el.value; });
                            return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "option ".concat(isSelected ? "selected" : "", " ").concat(index === focusedIndex ? "focused" : ""), onClick: function (e) {
                                    handleOptionClick(el, onChange);
                                    e.stopPropagation();
                                }, style: __assign({ borderTop: index === 0 ? "none" : "" }, optionStyle) }, { children: multiSelect && el.label !== "전체" ? ((0, jsx_runtime_1.jsx)(checkbox_1.default, { onChange: function () { }, style: { gap: 12 }, shape: "square", checked: isSelected, label: el.label })) : (el.label) }), index));
                        }) }))] })));
        } }));
}
exports.default = react_1.default.memo(Select);
var EContainer = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  box-sizing: border-box;\n  position: relative;\n  min-width: ", ";\n  .label-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    color: ", ";\n    background-color: ", ";\n    border-radius: 8px;\n    border: 1px solid ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: normal;\n    cursor: pointer;\n    ", "\n    img {\n      transform: ", ";\n      transition: 0.125s;\n    }\n\n    input {\n      &:disabled {\n        color: ", ";\n        background-color: ", ";\n\n        &::placeholder {\n          color: ", ";\n        }\n      }\n    }\n  }\n"], ["\n  display: inline-flex;\n  box-sizing: border-box;\n  position: relative;\n  min-width: ", ";\n  .label-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    color: ", ";\n    background-color: ", ";\n    border-radius: 8px;\n    border: 1px solid ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: normal;\n    cursor: pointer;\n    ", "\n    img {\n      transform: ", ";\n      transition: 0.125s;\n    }\n\n    input {\n      &:disabled {\n        color: ", ";\n        background-color: ", ";\n\n        &::placeholder {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.width) || selectType[size].width;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.width) || selectType[size].width;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.height) || selectType[size].height;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.padding) || selectType[size].padding;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray3;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.fontSize) || selectType[size].fontSize;
}, function (_a) {
    var selectStyle = _a.selectStyle;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.fontWeight) || "400";
}, function (_a) {
    var status = _a.status, disabled = _a.disabled, theme = _a.theme;
    return STATUS_STYLE(theme)[disabled ? "disabled" : status];
}, function (_a) {
    var visible = _a.visible;
    return "rotate(".concat(visible ? 180 : 360, "deg)");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray4;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray25;
});
var StyledPopper = (0, styled_1.default)(material_1.Popper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: ", ";\n  width: ", ";\n  padding: ", ";\n\n  padding-top: 0px;\n  background-color: ", ";\n  border-radius: 6px;\n  border: 1px solid ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 3;\n  cursor: pointer;\n  max-height: 300px;\n\n  .option {\n    display: flex;\n    align-items: center;\n    width: ", ";\n    height: ", ";\n    overflow: scroll;\n    overflow-x: hidden;\n    padding-left: 14px;\n    padding-right: 14px;\n    margin-left: -14px;\n\n    color: ", ";\n    border-top: 1px solid ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: normal;\n\n    &.selected {\n      background-color: ", ";\n    }\n\n    &.focused {\n      background-color: ", ";\n    }\n\n    :hover {\n      background-color: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  width: ", ";\n  padding: ", ";\n\n  padding-top: 0px;\n  background-color: ", ";\n  border-radius: 6px;\n  border: 1px solid ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 3;\n  cursor: pointer;\n  max-height: 300px;\n\n  .option {\n    display: flex;\n    align-items: center;\n    width: ", ";\n    height: ", ";\n    overflow: scroll;\n    overflow-x: hidden;\n    padding-left: 14px;\n    padding-right: 14px;\n    margin-left: -14px;\n\n    color: ", ";\n    border-top: 1px solid ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: normal;\n\n    &.selected {\n      background-color: ", ";\n    }\n\n    &.focused {\n      background-color: ", ";\n    }\n\n    :hover {\n      background-color: ", ";\n    }\n  }\n"])), function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.height)
        ? "calc(".concat(selectStyle.height, " + 2px)")
        : selectType[size].height;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.width) || selectType[size].width;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.padding) || selectType[size].padding;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray4;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.width) || selectType[size].width;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.height) || selectType[size].height;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray4;
}, function (_a) {
    var selectStyle = _a.selectStyle, size = _a.size;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.fontSize) || selectType[size].fontSize;
}, function (_a) {
    var selectStyle = _a.selectStyle;
    return (selectStyle === null || selectStyle === void 0 ? void 0 : selectStyle.fontWeight) || "400";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.mainColor.main1;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.grayScale.gray3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.mainColor.main2;
});
var selectType = {
    tiny: {
        width: "89px",
        height: "28px",
        padding: "0px 8px",
        fontSize: "12px",
    },
    small: {
        width: "89px",
        height: "32px",
        padding: "4px 8px",
        fontSize: "12px",
    },
    normal: {
        width: "290px",
        height: "44px",
        padding: "10px 14px",
        fontSize: "16px",
    },
    big: {
        width: "427px",
        height: "44px",
        padding: "10px 14px",
        fontSize: "16px",
    },
    responsive: {
        width: "100%",
        height: "32px",
        padding: "4px 8px",
        fontSize: "12px",
    },
};
var STATUS_STYLE = function (theme) { return ({
    normal: {
        backgroundColor: theme.colors.grayScale.white,
        border: "1px solid ".concat(theme.colors.grayScale.gray3),
        color: theme.colors.grayScale.black,
    },
    error: {
        backgroundColor: theme.colors.errorColor.error3,
        border: "1px solid ".concat(theme.colors.errorColor.errorMain),
        color: theme.colors.grayScale.black,
    },
    disabled: {
        backgroundColor: theme.colors.grayScale.gray4,
        border: "1px solid ".concat(theme.colors.grayScale.gray3),
        color: theme.colors.grayScale.gray3,
    },
}); };
var templateObject_1, templateObject_2;
