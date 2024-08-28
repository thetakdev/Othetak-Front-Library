"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactHookForm = require("react-hook-form");
var _react = _interopRequireWildcard(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _material = require("@mui/material");
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _useClickOutside = _interopRequireDefault(require("../hooks/use-click-outside"));
var _react2 = require("@emotion/react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Select(_ref) {
  let {
    className,
    control,
    name,
    option,
    imgSize = 14,
    selectStyle,
    labelStyle,
    optionStyle,
    disabled = false,
    size = "normal",
    status = "normal",
    multiSelect = false,
    allCheck = false,
    placeholder
  } = _ref;
  const theme = (0, _react2.useTheme)();
  const ref = (0, _react.useRef)(null);
  const [visible, setVisible] = (0, _react.useState)(false);
  (0, _useClickOutside.default)({
    ref1: ref
  }, () => setVisible(false));
  const [selectedOptions, setSelectedOptions] = (0, _react.useState)([]);
  const [filteredOptions, setFilteredOptions] = (0, _react.useState)(option);
  const [searchTerm, setSearchTerm] = (0, _react.useState)("");
  const [focusedIndex, setFocusedIndex] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    if (visible === false) {
      setSearchTerm("");
      initOption();
    }
  }, [visible]);
  const initOption = () => {
    if (allCheck) {
      const allOption = {
        label: "전체",
        value: "all"
      };
      setFilteredOptions([allOption, ...option]);
    } else {
      setFilteredOptions(option);
    }
  };
  (0, _react.useEffect)(() => {
    initOption();
  }, []);
  (0, _react.useEffect)(() => {
    setFocusedIndex(0);
  }, [searchTerm]);
  const handleOptionClick = (el, onChange) => {
    if (multiSelect) {
      if (el.value === "all") {
        if (selectedOptions.length === option.length) {
          setSelectedOptions([]);
          onChange([]);
        } else {
          setSelectedOptions(option);
          onChange(option.map(opt => opt.value));
        }
      } else {
        const alreadySelected = selectedOptions.some(option => option.value === el.value);
        const newSelectedOptions = alreadySelected ? selectedOptions.filter(option => option.value !== el.value) : [...selectedOptions, el];
        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions.map(option => option.value));
      }
    } else {
      setSelectedOptions([el]);
      onChange(el.value);
      setVisible(false);
    }
  };
  const handleSearch = e => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    setFilteredOptions(option.filter(opt => opt.label.toLowerCase().includes(searchValue)));
  };
  const handleKeyDown = (e, onChange) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => (prev + 1) % filteredOptions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (Boolean(filteredOptions[focusedIndex]) === false) return;
      handleOptionClick(filteredOptions[focusedIndex], onChange);
    }
  };
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const idRef = (0, _react.useRef)("simple-popper");
  const handleClick = _react.default.useCallback(event => {
    if (disabled) return;
    idRef.current = "simple-popper";
    setAnchorEl(event.currentTarget);
    setVisible(!visible);
    event.preventDefault();
  }, [visible, disabled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHookForm.Controller, {
    name: name,
    control: control,
    render: _ref2 => {
      let {
        field: {
          value,
          onChange
        }
      } = _ref2;
      const labels = selectedOptions.map(option => option.label).join(", ");
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(EContainer, {
        className: className,
        ref: ref,
        visible: visible,
        onClick: handleClick,
        onKeyDown: e => handleKeyDown(e, onChange),
        tabIndex: 0,
        selectStyle: selectStyle,
        disabled: disabled,
        size: size,
        status: status,
        theme: theme,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "label-wrapper",
          style: labelStyle,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            value: searchTerm,
            onChange: handleSearch,
            placeholder: option.length === selectedOptions.length ? placeholder : labels || placeholder,
            style: {
              border: "none",
              outline: "none",
              width: "100%"
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
            src: `/images/icon/arrow/${disabled ? "arrow_small_disabled" : "arrow_small_gray"}.svg`,
            alt: "arrow",
            width: imgSize,
            height: imgSize
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledPopper, {
          size: size,
          placement: "bottom",
          id: idRef.current,
          open: visible,
          anchorEl: anchorEl,
          style: selectStyle,
          theme: theme,
          children: filteredOptions.map((el, index) => {
            const isSelected = selectedOptions.some(option => option.value === el.value);
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: `option ${isSelected ? "selected" : ""} ${index === focusedIndex ? "focused" : ""}`,
              onClick: e => {
                handleOptionClick(el, onChange);
                e.stopPropagation();
              },
              style: {
                borderTop: index === 0 ? "none" : "",
                ...optionStyle
              },
              children: multiSelect && el.label !== "전체" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkbox.default, {
                onChange: () => {},
                style: {
                  gap: 12
                },
                shape: "square",
                checked: isSelected,
                label: el.label
              }) : el.label
            }, index);
          })
        })]
      });
    }
  });
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(Select);
const EContainer = _styled.default.div`
  display: inline-flex;
  height: 44px;
  position: relative;
  min-width: ${_ref3 => {
  let {
    selectStyle,
    size
  } = _ref3;
  return selectStyle?.width || selectType[size].width;
}};
  .label-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${_ref4 => {
  let {
    selectStyle,
    size
  } = _ref4;
  return selectStyle?.width || selectType[size].width;
}};
    height: ${_ref5 => {
  let {
    selectStyle,
    size
  } = _ref5;
  return selectStyle?.height || selectType[size].height;
}};
    padding: ${_ref6 => {
  let {
    selectStyle,
    size
  } = _ref6;
  return selectStyle?.padding || selectType[size].padding;
}};
    color: ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.colors.grayScale.black;
}};
    background-color: ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.colors.grayScale.white;
}};
    border-radius: 8px;
    border: 1px solid ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.colors.grayScale.gray3;
}};
    font-size: ${_ref10 => {
  let {
    selectStyle,
    size
  } = _ref10;
  return selectStyle?.fontSize || selectType[size].fontSize;
}};
    font-weight: ${_ref11 => {
  let {
    selectStyle
  } = _ref11;
  return selectStyle?.fontWeight || "400";
}};
    line-height: normal;
    cursor: pointer;
    ${_ref12 => {
  let {
    status,
    disabled,
    theme
  } = _ref12;
  return STATUS_STYLE(theme)[disabled ? "disabled" : status];
}}
    img {
      transform: ${_ref13 => {
  let {
    visible
  } = _ref13;
  return `rotate(${visible ? 180 : 360}deg)`;
}};
      transition: 0.125s;
    }
  }
`;
const StyledPopper = (0, _styled.default)(_material.Popper)`
  position: absolute;
  top: ${_ref14 => {
  let {
    selectStyle,
    size
  } = _ref14;
  return selectStyle?.height ? `calc(${selectStyle.height} + 2px)` : selectType[size].height;
}};
  width: ${_ref15 => {
  let {
    selectStyle,
    size
  } = _ref15;
  return selectStyle?.width || selectType[size].width;
}};
  background-color: ${_ref16 => {
  let {
    theme
  } = _ref16;
  return theme.colors.grayScale.white;
}};
  border-radius: 6px;
  border: 1px solid ${_ref17 => {
  let {
    theme
  } = _ref17;
  return theme.colors.grayScale.gray4;
}};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;
  cursor: pointer;

  .option {
    display: flex;
    align-items: center;
    width: ${_ref18 => {
  let {
    selectStyle,
    size
  } = _ref18;
  return selectStyle?.width || selectType[size].width;
}};
    height: ${_ref19 => {
  let {
    selectStyle,
    size
  } = _ref19;
  return selectStyle?.height || selectType[size].height;
}};
    padding: ${_ref20 => {
  let {
    selectStyle,
    size
  } = _ref20;
  return selectStyle?.padding || selectType[size].padding;
}};
    color: ${_ref21 => {
  let {
    theme
  } = _ref21;
  return theme.colors.grayScale.black;
}};
    border-top: 1px solid ${_ref22 => {
  let {
    theme
  } = _ref22;
  return theme.colors.grayScale.gray4;
}};
    font-size: ${_ref23 => {
  let {
    selectStyle,
    size
  } = _ref23;
  return selectStyle?.fontSize || selectType[size].fontSize;
}};
    font-weight: ${_ref24 => {
  let {
    selectStyle
  } = _ref24;
  return selectStyle?.fontWeight || "400";
}};
    line-height: normal;

    &.selected {
      background-color: ${_ref25 => {
  let {
    theme
  } = _ref25;
  return theme.colors.mainColor.main1;
}};
    }

    &.focused {
      background-color: ${_ref26 => {
  let {
    theme
  } = _ref26;
  return theme.colors.grayScale.gray3;
}};
    }

    :hover {
      background-color: ${_ref27 => {
  let {
    theme
  } = _ref27;
  return theme.colors.mainColor.main2;
}};
    }
  }
`;
const selectType = {
  small: {
    width: "89px",
    height: "32px",
    padding: "4px 8px",
    fontSize: "12px"
  },
  normal: {
    width: "290px",
    height: "44px",
    padding: "10px 14px",
    fontSize: "16px"
  },
  tiny: {
    width: "89px",
    height: "28px",
    padding: "0px 8px",
    fontSize: "12px"
  },
  big: {
    width: "427px",
    height: "44px",
    padding: "10px 14px",
    fontSize: "16px"
  },
  responsive: {
    width: "100%",
    height: "32px",
    padding: "4px 8px",
    fontSize: "12px"
  }
};
const STATUS_STYLE = theme => ({
  normal: {
    backgroundColor: theme.colors.grayScale.white,
    border: `1px solid ${theme.colors.grayScale.gray3}`,
    color: theme.colors.grayScale.black
  },
  error: {
    backgroundColor: theme.colors.errorColor.error3,
    border: `1px solid ${theme.colors.errorColor.errorMain}`,
    color: theme.colors.grayScale.black
  },
  disabled: {
    backgroundColor: theme.colors.grayScale.gray4,
    border: `1px solid ${theme.colors.grayScale.gray3}`,
    color: theme.colors.grayScale.gray3
  }
});