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
  shape?: "square" | "circle";
  disabled?: boolean;
}

export default forwardRef(function Checkbox(
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
  }: Props,
  ref: any
) {
  return (
    <div style={{ height: size }}>
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
      >
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="label">{label ? label : customLabel}</span>
      </CustomLabel>
    </div>
  );
});

const CustomLabel = styled.label<{
  size: string;
  gap?: string;
  requiredPosition?: "before" | "after";
  shape: "square" | "circle";
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
