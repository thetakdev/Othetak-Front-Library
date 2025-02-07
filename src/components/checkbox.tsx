"use client";
import { forwardRef } from "react";
import styled from "@emotion/styled";

interface Props {
  className?: string;
  size?: string;
  gap?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  customLabel?: React.ReactNode;
  requiredPosition?: "before" | "after";
  shape?: "square" | "circle" | "check";
  disabled?: boolean;
  onClick?: (...args: any) => void;
}

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef(
  (
    {
      className,
      shape = "square",
      size = "20px",
      gap,
      style,
      checked = false,
      onChange,
      label,
      customLabel,
      requiredPosition,
      disabled,
      onClick,
    }: Props,
    ref: any
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
      if (!disabled && onChange) {
        onChange({
          ...e,
          target: { ...e.target, checked: !checked },
        } as unknown as React.ChangeEvent<HTMLInputElement>);
      }
      if (onClick) onClick(e);
    };

    return (
      <label style={{ height: size }} onClick={handleClick}>
        <CustomLabel
          shape={shape}
          disabled={disabled}
          className={className}
          ref={ref}
          size={size}
          gap={gap}
          style={style}
          requiredPosition={requiredPosition}
          checked={checked}
          onClick={onClick}
        >
          <input
            type="checkbox"
            disabled={disabled}
            checked={checked}
            onChange={onChange ? onChange : () => {}}
          />
          <label className="label">{label ? label : customLabel}</label>
        </CustomLabel>
      </label>
    );
  }
);

export default Checkbox;

const CustomLabel = styled.label<{
  size: string;
  gap?: string;
  requiredPosition?: "before" | "after";
  shape: "square" | "circle" | "check";
  disabled: boolean;
  checked: boolean;
  checkbox?: any;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "6px")};
  color: ${({ theme }) => theme.colors.grayScale.black};
  line-height: normal;
  cursor: pointer;

  input {
    min-width: ${({ size }) => size};
    height: ${({ size }) => size};
    margin: 0px;
    background-image: ${({ shape, disabled }) => {
      if (shape === "square") {
        if (disabled) {
          return "url(https://image.thetak.net/asset/product/images/checkbox_disabled.svg)";
        } else {
          return "url(https://image.thetak.net/asset/product/images/checkbox_default.svg)";
        }
      }
      if (shape === "circle") {
        if (disabled) {
          return "url(https://image.thetak.net/asset/product/images/checkbox_radio_dsiabled_f.svg)";
        } else {
          return "url(https://image.thetak.net/asset/product/images/checkbox_radio_default.svg)";
        }
      }
      if (shape === "check") {
        return "url(https://image.thetak.net/asset/product/images/checkbox_check_brand.svg)";
      }
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    appearance: none;
    cursor: pointer;

    &:checked {
      background-image: ${({ shape, disabled, theme }) => {
        if (shape === "square") {
          if (disabled) {
            return `url(https://image.thetak.net/asset/product/images/checkbox_disabled_t.svg)`;
          } else {
            return `url(${theme.checkbox.square.checked})`;
          }
        }
        if (shape === "circle") {
          if (disabled) {
            return "url(https://image.thetak.net/asset/product/images/checkbox_radio_disabled_t.svg)";
          } else {
            return `url(${theme.checkbox.radio.checked})`;
          }
        }
        if (shape === "check") {
          return "url(https://image.thetak.net/asset/product/images/checkbox_check_brand_t.svg)";
        }
      }};
    }
  }

  .label {
    ::before {
      content: ${({ requiredPosition }) =>
        requiredPosition === "before" ? '"*"' : "none"};
      color: ${({ theme }) => theme.colors.errorColor.errorMain};
    }

    ::after {
      content: ${({ requiredPosition }) =>
        requiredPosition === "after" ? '"*"' : "none"};
      color: ${({ theme }) => theme.colors.errorColor.errorMain};
    }
  }
`;
