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
    placeholder = "선택"
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

  // 옵션 선택
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

  // 검색
  const handleSearch = e => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    setFilteredOptions(option.filter(opt => opt.label.toLowerCase().includes(searchValue)));
  };

  // 방향키로 아이템 선택
  const handleKeyDown = (e, onChange) => {
    if (visible === false) {
      setVisible(true);
      return;
    }
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

  // 셀렉트박스 클릭
  const handleClick = _react.default.useCallback(event => {
    if (disabled) return;
    idRef.current = "simple-popper";
    setAnchorEl(event.currentTarget);
    setVisible(!visible);
    event.preventDefault();
  }, [visible, disabled]);
  const scrollContainer = (0, _react.useRef)(null);

  // 방향키로 설정할 때 스크롤 위치 정하는 로직
  (0, _react.useEffect)(() => {
    if (scrollContainer?.current) {
      const value = selectType[size].height;
      const numberOnly = parseInt(value, 10); // 결과: 44

      scrollContainer.current.scrollTop = (focusedIndex - 4) * numberOnly;
      return;
    }
  }, [focusedIndex, scrollContainer]);
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
            disabled: disabled,
            onChange: handleSearch,
            placeholder: option.length === selectedOptions.length ? placeholder : labels || placeholder,
            style: {
              border: "none",
              outline: "none",
              width: "100%"
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
            src: `https://image.thetak.net/asset/product/images/${disabled ? "arrow_down_gray_25" : "arrow_down_gray_2"}.svg`,
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
          ref: scrollContainer,
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
  box-sizing: border-box;
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

    input {
      &:disabled {
        color: ${_ref14 => {
  let {
    theme
  } = _ref14;
  return theme.colors.grayScale.gray3;
}};

        &::placeholder {
          color: ${_ref15 => {
  let {
    theme
  } = _ref15;
  return theme.colors.grayScale.gray25;
}};
        }
      }
    }
  }
`;
const StyledPopper = (0, _styled.default)(_material.Popper)`
  position: absolute;
  top: ${_ref16 => {
  let {
    selectStyle,
    size
  } = _ref16;
  return selectStyle?.height ? `calc(${selectStyle.height} + 2px)` : selectType[size].height;
}};
  width: ${_ref17 => {
  let {
    selectStyle,
    size
  } = _ref17;
  return selectStyle?.width || selectType[size].width;
}};
  padding: ${_ref18 => {
  let {
    selectStyle,
    size
  } = _ref18;
  return selectStyle?.padding || selectType[size].padding;
}};

  padding-top: 0px;
  background-color: ${_ref19 => {
  let {
    theme
  } = _ref19;
  return theme.colors.grayScale.white;
}};
  border-radius: 6px;
  border: 1px solid ${_ref20 => {
  let {
    theme
  } = _ref20;
  return theme.colors.grayScale.gray4;
}};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;
  cursor: pointer;
  max-height: 300px;

  .option {
    display: flex;
    align-items: center;
    width: ${_ref21 => {
  let {
    selectStyle,
    size
  } = _ref21;
  return selectStyle?.width || selectType[size].width;
}};
    height: ${_ref22 => {
  let {
    selectStyle,
    size
  } = _ref22;
  return selectStyle?.height || selectType[size].height;
}};
    overflow: scroll;
    padding-left: 14px;
    padding-right: 14px;
    margin-left: -14px;

    color: ${_ref23 => {
  let {
    theme
  } = _ref23;
  return theme.colors.grayScale.black;
}};
    border-top: 1px solid ${_ref24 => {
  let {
    theme
  } = _ref24;
  return theme.colors.grayScale.gray4;
}};
    font-size: ${_ref25 => {
  let {
    selectStyle,
    size
  } = _ref25;
  return selectStyle?.fontSize || selectType[size].fontSize;
}};
    font-weight: ${_ref26 => {
  let {
    selectStyle
  } = _ref26;
  return selectStyle?.fontWeight || "400";
}};
    line-height: normal;

    &.selected {
      background-color: ${_ref27 => {
  let {
    theme
  } = _ref27;
  return theme.colors.mainColor.main1;
}};
    }

    &.focused {
      background-color: ${_ref28 => {
  let {
    theme
  } = _ref28;
  return theme.colors.grayScale.gray3;
}};
    }

    :hover {
      background-color: ${_ref29 => {
  let {
    theme
  } = _ref29;
  return theme.colors.mainColor.main2;
}};
    }
  }
`;
const selectType = {
  tiny: {
    width: "89px",
    height: "28px",
    padding: "0px 8px",
    fontSize: "12px"
  },
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