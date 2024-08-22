"use client";
import { forwardRef } from "react";
import { Common } from "@/styles/common";
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
    checked,
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
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "6px")};
  color: ${Common.default.colors.grayScale.black};
  line-height: normal;
  cursor: pointer;

  input {
    min-width: ${({ size }) => size};
    height: ${({ size }) => size};
    margin: 0px;
    background-image: ${({ shape, disabled }) => {
      if (shape === "square") {
        if (disabled) {
          return "url(/images/checkbox/checkbox_disabled.svg)";
        } else {
          return "url(/images/checkbox/checkbox_admin_main.svg)";
        }
      }
      if (shape === "circle") {
        if (disabled) {
          return "url(/images/icon/radio/radio_unchecked_disabled.svg)";
        } else {
          return "url(/images/icon/radio/radio_unchecked_gray_3.svg)";
        }
      }
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    appearance: none;
    cursor: pointer;

    &:checked {
      background-image: ${({ shape, disabled }) => {
        if (shape === "square") {
          if (disabled) {
            return "url(/images/checkbox/checkbox_checked_disabled.svg)";
          } else {
            return "url(/images/checkbox/checkbox_checked_admin_main.svg)";
          }
        }
        if (shape === "circle") {
          if (disabled) {
            return "url(/images/icon/radio/radio_unchecked_disabled.svg)";
          } else {
            return "url(/images/icon/radio/radio_checked_admin_main.svg)";
          }
        }
      }};
    }
  }

  .label {
    ::before {
      content: ${({ requiredPosition }) =>
        requiredPosition === "before" ? '"*"' : "none"};
      color: ${Common.default.colors.errorColor.errorMain};
    }

    ::after {
      content: ${({ requiredPosition }) =>
        requiredPosition === "after" ? '"*"' : "none"};
      color: ${Common.default.colors.errorColor.errorMain};
    }
  }
`;
