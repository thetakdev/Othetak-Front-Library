"use client";
import { Controller } from "react-hook-form";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Popper } from "@mui/material";
import Checkbox from "./checkbox";
import useClickOutside from "@/hooks/use-click-outside";
import { useTheme } from "@emotion/react";

export interface SelectOptionType {
  label: string;
  value: string | number | boolean;
}

type Size = "tiny" | "small" | "normal" | "big" | "responsive";
type Status = "normal" | "error";
interface Props {
  className?: string;
  control: any;
  name: string;
  option: SelectOptionType[];
  imgSize?: number;
  selectStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  popperStyle?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  disabled?: boolean;
  size?: Size;
  status?: Status;
  multiSelect?: boolean;
  allCheck?: boolean;
  placeholder?: string;
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
  disabled = false,
  size = "normal",
  status = "normal",
  multiSelect = false,
  allCheck = false,
  placeholder = "선택",
}: Props) {
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
      const allOption: SelectOptionType = { label: "전체", value: "all" };
      setFilteredOptions([allOption, ...option]);
    } else {
      setFilteredOptions(option);
    }
  };

  useEffect(() => {
    initOption();
  }, []);

  useEffect(() => {
    setFocusedIndex(0);
  }, [searchTerm]);

  // 옵션 선택
  const handleOptionClick = (el: SelectOptionType, onChange: any) => {
    if (multiSelect) {
      if (el.value === "all") {
        if (selectedOptions.length === option.length) {
          setSelectedOptions([]);
          onChange([]);
        } else {
          setSelectedOptions(option);
          onChange(option.map((opt) => opt.value));
        }
      } else {
        const alreadySelected = selectedOptions.some(
          (option) => option.value === el.value
        );
        const newSelectedOptions = alreadySelected
          ? selectedOptions.filter((option) => option.value !== el.value)
          : [...selectedOptions, el];
        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions.map((option) => option.value));
      }
    } else {
      setSelectedOptions([el]);
      onChange(el.value);
      setVisible(false);
    }
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

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        const labels = selectedOptions.map((option) => option.label).join(", ");
        return (
          <EContainer
            className={className}
            ref={ref}
            visible={visible}
            onClick={handleClick}
            onKeyDown={(e) => handleKeyDown(e, onChange)}
            tabIndex={0}
            selectStyle={selectStyle}
            disabled={disabled}
            size={size}
            status={status}
            theme={theme}
          >
            <div className="label-wrapper" style={labelStyle}>
              <input
                type="text"
                value={searchTerm}
                disabled={disabled}
                onChange={handleSearch}
                placeholder={
                  option.length === selectedOptions.length
                    ? placeholder
                    : labels || placeholder
                }
                style={{ border: "none", outline: "none", width: "100%" }}
              />
              <Image
                src={`https://image.thetak.net/asset/product/images/${disabled ? "arrow_down_gray_25" : "arrow_down_gray_2"}.svg`}
                alt="arrow"
                width={imgSize}
                height={imgSize}
              />
            </div>

            <StyledPopper
              size={size}
              placement="bottom"
              id={idRef.current}
              open={visible}
              anchorEl={anchorEl}
              style={selectStyle}
              theme={theme}
              ref={scrollContainer}
            >
              {filteredOptions.map((el, index) => {
                const isSelected = selectedOptions.some(
                  (option) => option.value === el.value
                );
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
                        onChange={() => {}}
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
  min-width: ${({ selectStyle, size }) =>
    selectStyle?.width || selectType[size].width};
  .label-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ selectStyle, size }) =>
      selectStyle?.width || selectType[size].width};
    height: ${({ selectStyle, size }) =>
      selectStyle?.height || selectType[size].height};
    padding: ${({ selectStyle, size }) =>
      selectStyle?.padding || selectType[size].padding};
    color: ${({ theme }) => theme.colors.grayScale.black};
    background-color: ${({ theme }) => theme.colors.grayScale.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};
    font-size: ${({ selectStyle, size }) =>
      selectStyle?.fontSize || selectType[size].fontSize};
    font-weight: ${({ selectStyle }) => selectStyle?.fontWeight || "400"};
    line-height: normal;
    cursor: pointer;
    ${({ status, disabled, theme }) =>
      STATUS_STYLE(theme)[disabled ? "disabled" : status]}
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
  width: ${({ selectStyle, size }) =>
    selectStyle?.width || selectType[size].width};
  padding: ${({ selectStyle, size }) =>
    selectStyle?.padding || selectType[size].padding};

  padding-top: 0px;
  background-color: ${({ theme }) => theme.colors.grayScale.white};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray4};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;
  cursor: pointer;
  max-height: 300px;

  .option {
    display: flex;
    align-items: center;
    width: ${({ selectStyle, size }) =>
      selectStyle?.width || selectType[size].width};
    height: ${({ selectStyle, size }) =>
      selectStyle?.height || selectType[size].height};
    overflow: scroll;
    overflow-x: hidden;
    padding-left: 14px;
    padding-right: 14px;
    margin-left: -14px;

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

const STATUS_STYLE = (theme: any) => ({
  normal: {
    backgroundColor: theme.colors.grayScale.white,
    border: `1px solid ${theme.colors.grayScale.gray3}`,
    color: theme.colors.grayScale.black,
  },
  error: {
    backgroundColor: theme.colors.errorColor.error3,
    border: `1px solid ${theme.colors.errorColor.errorMain}`,
    color: theme.colors.grayScale.black,
  },
  disabled: {
    backgroundColor: theme.colors.grayScale.gray4,
    border: `1px solid ${theme.colors.grayScale.gray3}`,
    color: theme.colors.grayScale.gray3,
  },
});
