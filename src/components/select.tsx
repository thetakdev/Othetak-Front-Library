"use client";
import { Controller } from "react-hook-form";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { CircularProgress, Popper } from "@mui/material";
import useClickOutside from "@/hooks/use-click-outside";
import { useTheme } from "@emotion/react";
import Checkbox from "./checkbox";

export interface SelectOptionType {
  label: string;
  value: string | number | boolean;
}

type Size = "tiny" | "small" | "normal" | "big" | "responsive";
type Status = "normal" | "error";
export interface SELECT_PROPS {
  className?: string;
  control: any;
  name: string;
  option: SelectOptionType[];
  imgSize?: number;
  selectStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  popperStyle?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  disabled?: boolean;
  size?: Size;
  status?: Status;
  multiSelect?: boolean;
  allCheck?: boolean;
  placeholder?: string;
  onChange?: () => void;
  isLoading?: boolean;
  labelComponent?: any;
}

function Select({
  className,
  control,
  name,
  option,
  imgSize = 14,
  selectStyle,
  labelStyle,
  optionStyle,
  inputStyle,
  disabled = false,
  size = "small",
  status = "normal",
  multiSelect = false,
  allCheck = false,
  placeholder = "선택",
  popperStyle,
  isLoading,
  labelComponent,
  onChange,
}: SELECT_PROPS) {
  const theme = useTheme();
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  useClickOutside({ ref1: ref }, () => setVisible(false));
  const [selectedOptions, setSelectedOptions] = useState<SelectOptionType[]>(
    []
  );
  const [filteredOptions, setFilteredOptions] = useState(option);
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (visible === false) {
      setSearchTerm("");
      initOption();
    }
  }, [visible]);

  const initOption = () => {
    if (allCheck) {
      const allOption: SelectOptionType = { label: "전체", value: null };

      setFilteredOptions([allOption, ...option]);
    } else {
      setFilteredOptions(option);
    }
  };

  useEffect(() => {
    initOption();
  }, [option]);

  useEffect(() => {
    setFocusedIndex(0);
    if (searchTerm === "") {
      initOption();
    }
  }, [searchTerm]);

  // 옵션 선택
  const handleOptionClick = (
    el: SelectOptionType,
    _onChange: (rest: any) => any
  ) => {
    if (multiSelect) {
      if (el.value === null) {
        if (selectedOptions.length === option.length) {
          setSelectedOptions([]);
          _onChange([]);
        } else {
          setSelectedOptions(option);
          _onChange(option.map((opt) => opt.value));
        }
      } else {
        const alreadySelected = selectedOptions.some(
          (option) => option.value === el.value
        );
        const newSelectedOptions = alreadySelected
          ? selectedOptions.filter((option) => option.value !== el.value)
          : [...selectedOptions, el];
        setSelectedOptions(newSelectedOptions);
        _onChange(newSelectedOptions.map((option) => option.value));
      }
    } else {
      setSelectedOptions([el]);
      _onChange(el.value);
      setVisible(false);
    }
    onChange && onChange();
  };

  // 검색
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    setFilteredOptions(
      option.filter((opt) => opt.label.toLowerCase().includes(searchValue))
    );
  };

  // 방향키로 아이템 선택
  const handleKeyDown = (e: React.KeyboardEvent, onChange: any) => {
    if (visible === false) {
      setVisible(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % filteredOptions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(
        (prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (Boolean(filteredOptions[focusedIndex]) === false) return;
      handleOptionClick(filteredOptions[focusedIndex], onChange);
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const idRef = useRef("simple-popper");

  // 셀렉트박스 클릭
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) return;
      idRef.current = "simple-popper";
      setAnchorEl(event.currentTarget);
      setVisible(!visible);
      event.preventDefault();
    },
    [visible, disabled]
  );

  const scrollContainer = useRef(null);

  // 방향키로 설정할 때 스크롤 위치 정하는 로직
  useEffect(() => {
    if (scrollContainer?.current) {
      const value = selectType[size].height;
      const numberOnly = parseInt(value, 10); // 결과: 44

      scrollContainer.current.scrollTop = (focusedIndex - 4) * numberOnly;
      return;
    }
  }, [focusedIndex, scrollContainer]);

  const [popperWidth, setPopperWidth] = useState<string | number>("auto"); // Popper 너비 상태 추가

  useEffect(() => {
    // EContainer의 너비를 가져와 Popper의 너비로 설정
    if (ref.current) {
      setPopperWidth(ref.current.offsetWidth);
    }
  }, [visible, ref.current]); // visible 또는 ref가 변경될 때마다 재계산

  const getDisabled = () => {
    if (Boolean(option?.length) === false || isLoading || disabled) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (multiSelect) {
            if (value) {
              const initialSelected = option.filter((opt) =>
                value.includes(opt.value)
              );
              setSelectedOptions(initialSelected);
            }
          }
        }, [value]);

        const getSelected = () => {
          let result = placeholder;
          if (multiSelect) {
            if (Boolean(value)) {
              if (value?.length === 0 || option.length === value?.length) {
                result = placeholder;
              } else {
                result = option
                  .filter((option) => value?.includes(option?.value)) // value 배열에 있는 값들만 필터링
                  .map((option) => option?.label) // 해당 값들의 label만 추출
                  .join(", "); // 결과를 ', '로 연결하여 반환
              }
            }
          } else {
            result =
              value === null || value === ""
                ? placeholder
                : option?.find((option) => option.value === value)?.label;
          }

          return result;
        };

        return (
          <EContainer
            className={className}
            ref={ref}
            visible={visible}
            onClick={handleClick}
            onKeyDown={(e) => handleKeyDown(e, onChange)}
            tabIndex={0}
            selectStyle={selectStyle}
            disabled={getDisabled()}
            size={size}
            status={status}
            theme={theme}
          >
            <div className="label-wrapper" style={labelStyle}>
              {labelComponent && (
                <div className="labelComponent">{labelComponent}</div>
              )}
              <input
                type="text"
                value={searchTerm}
                disabled={getDisabled()}
                onChange={handleSearch}
                placeholder={getSelected()}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  ...inputStyle,
                }}
              />
              {isLoading ? (
                <CircularProgress size={14} />
              ) : (
                <Image
                  src={`https://image.thetak.net/asset/product/images/${disabled ? "arrow_down_gray_25" : "arrow_down_gray_2"}.svg`}
                  alt="arrow"
                  width={imgSize}
                  height={imgSize}
                />
              )}
            </div>

            <StyledPopper
              size={size}
              placement="bottom"
              id={idRef.current}
              open={visible}
              anchorEl={anchorEl}
              style={{
                width: popperWidth || selectStyle?.width,
                ...popperStyle,
              }}
              theme={theme}
              ref={scrollContainer}
            >
              {filteredOptions?.map((el, index) => {
                let isSelected = false;

                if (multiSelect) {
                  isSelected = value?.includes(el.value);
                } else {
                  isSelected = value === el.value;
                }

                return (
                  <div
                    className={`option ${isSelected ? "selected" : ""} ${index === focusedIndex ? "focused" : ""}`}
                    key={index}
                    onClick={(e) => {
                      handleOptionClick(el, onChange);
                      e.stopPropagation();
                    }}
                    style={{
                      borderTop: index === 0 ? "none" : "",
                      ...optionStyle,
                    }}
                  >
                    {multiSelect && el.label !== "전체" ? (
                      <Checkbox
                        onClick={() => handleOptionClick(el, onChange)}
                        style={{ gap: 12 }}
                        shape="square"
                        checked={isSelected}
                        label={el.label}
                      />
                    ) : (
                      el.label
                    )}
                  </div>
                );
              })}
            </StyledPopper>
          </EContainer>
        );
      }}
    />
  );
}

export default React.memo(Select);

const EContainer = styled.div<{
  visible: boolean;
  selectStyle?: React.CSSProperties;
  disabled: boolean;
  size: Size;
  status?: "normal" | "error";
  theme: any;
}>`
  display: inline-flex;
  box-sizing: border-box;
  position: relative;
  max-width: ${({ selectStyle, size }) =>
    selectStyle?.width || selectType[size].width};
  min-width: ${({ selectStyle, size }) =>
    selectStyle?.width || selectType[size].width};

  .labelComponent {
    width: auto;
  }

  .label-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${({ selectStyle, size }) =>
      selectStyle?.height || selectType[size].height};
    max-width: ${({ selectStyle, size }) =>
      selectStyle?.width || selectType[size].width};
    min-width: ${({ selectStyle, size }) =>
      selectStyle?.width || selectType[size].width};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grayScale.black};
    background-color: ${({ theme }) => theme.colors.grayScale.white};
    border-radius: 8px;
    font-size: ${({ selectStyle, size }) =>
      selectStyle?.fontSize || selectType[size].fontSize};
    font-weight: ${({ selectStyle }) => selectStyle?.fontWeight || "400"};
    line-height: normal;
    cursor: pointer;
    padding: ${({ selectStyle, size }) =>
      selectStyle?.padding || selectType[size].padding};
    ${({ status, disabled, theme, visible }) =>
      STATUS_STYLE(theme, visible)[disabled ? "disabled" : status]}

    img {
      transform: ${({ visible }) => `rotate(${visible ? 180 : 360}deg)`};
      transition: 0.125s;
    }

    input {
      &:disabled {
        color: ${({ theme }) => theme.colors.grayScale.gray3};
        background-color: ${({ theme }) => theme.colors.grayScale.gray4};

        &::placeholder {
          color: ${({ theme }) => theme.colors.grayScale.gray25};
        }
      }
    }
  }
`;

const StyledPopper = styled(Popper)<{
  size: Size;
  selectStyle?: React.CSSProperties;
  theme: any;
}>`
  position: absolute;
  top: ${({ selectStyle, size }) =>
    selectStyle?.height
      ? `calc(${selectStyle.height} + 2px)`
      : selectType[size].height};
  box-sizing: border-box;
  padding-top: 0px;
  background-color: ${({ theme }) => theme.colors.grayScale.white};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray4};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 99999;
  cursor: pointer;
  max-height: 300px;

  .option {
    display: flex;
    align-items: center;
    height: ${({ selectStyle, size }) =>
      selectStyle?.height || selectType[size].height};
    overflow: scroll;
    overflow-x: hidden;
    padding: ${({ selectStyle, size }) =>
      selectStyle?.padding || selectType[size].padding};
    color: ${({ theme }) => theme.colors.grayScale.black};
    border-top: 1px solid ${({ theme }) => theme.colors.grayScale.gray4};
    font-size: ${({ selectStyle, size }) =>
      selectStyle?.fontSize || selectType[size].fontSize};
    font-weight: ${({ selectStyle }) => selectStyle?.fontWeight || "400"};
    line-height: normal;

    &.selected {
      background-color: ${({ theme }) => theme.colors.mainColor.main1};
    }

    &.focused {
      background-color: ${({ theme }) => theme.colors.grayScale.gray3};
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.mainColor.main2};
    }
  }
`;

const selectType = {
  tiny: {
    width: "89px",
    height: "28px",
    padding: "0px 8px",
    fontSize: "12px",
  },
  small: {
    width: "150px",
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

const STATUS_STYLE = (theme: any, visible: boolean) => ({
  normal: {
    backgroundColor: theme.colors.grayScale.white,
    border: `1px solid ${visible ? theme.colors.mainColor.main : theme.colors.grayScale.gray3}`,
    color: theme.colors.grayScale.black,
  },
  error: {
    backgroundColor: theme.colors.errorColor.error3,
    border: `1px solid ${visible ? theme.colors.mainColor.main : theme.colors.errorColor.errorMain}`,
    color: theme.colors.grayScale.black,
  },
  disabled: {
    backgroundColor: theme.colors.grayScale.gray4,
    border: `1px solid ${visible ? theme.colors.mainColor.main : theme.colors.grayScale.gray3}`,
    color: theme.colors.grayScale.gray3,
  },
});
