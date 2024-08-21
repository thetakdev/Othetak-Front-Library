"use client";
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
import { Common } from "@/styles/common";

type SizeType = "tiny" | "small" | "middle" | "large" | "xLarge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fakeDisabled?: boolean;
  size?: SizeType;
}

export default function Button({
  className,
  variant = "primary",
  size = "middle",
  onClick,
  children,
  isLoading,
  startIcon,
  endIcon,
  fakeDisabled,
  ...rest
}: ButtonProps) {
  const { disabled, style } = rest;

  const loadingStyle = {
    width: parseInt((style?.height as string) || "37px") / 2,
    height: parseInt((style?.height as string) || "37px") / 2,
    color: "#46227C",
  };

  return (
    <CustomButton
      className={className}
      aria-label=""
      variant={variant}
      disabled={!!isLoading || disabled}
      onClick={onClick}
      isLoading={isLoading}
      fakeDisabled={fakeDisabled}
      size={size}
      {...rest}
      style={style}
    >
      {!isLoading && startIcon}
      {isLoading ? <CircularProgress style={loadingStyle} /> : children}
      {!isLoading && endIcon}
    </CustomButton>
  );
}

const sizeStyle: { [key in SizeType]: React.CSSProperties } = {
  tiny: {
    height: "28px",
    padding: "0px 8px",
    fontSize: "12px",
  },
  small: {
    height: "36px",
    padding: "0px 14px",
    fontSize: "14px",
  },
  middle: {
    height: "40px",
    padding: "0px 16px",
    fontSize: "14px",
  },
  large: {
    height: "44px",
    padding: "0px 18px",
    fontSize: "16px",
  },
  xLarge: {
    height: "48px",
    padding: "0px 20px",
    fontSize: "16px",
  },
};

const style = {
  primary: {
    default: {
      color: `${Common.default.colors.grayScale.white}`,
      backgroundColor: `${Common.default.colors.mainColor.main}`,
    },
    disabled: {
      color: `${Common.default.colors.grayScale.white}`,
      backgroundColor: `${Common.default.colors.grayScale.gray3}`,
    },
    hover: {
      backgroundColor: `${Common.default.colors.mainColor.main7}`,
    },
  },

  secondary: {
    default: {
      color: `${Common.default.colors.mainColor.main}`,
      backgroundColor: `${Common.default.colors.grayScale.white}`,
      border: `1px solid ${Common.default.colors.mainColor.main}`,
    },

    disabled: {
      color: `${Common.default.colors.grayScale.gray3}`,
      backgroundColor: `${Common.default.colors.grayScale.white}`,
      border: `1px solid ${Common.default.colors.grayScale.gray3}`,
    },
    hover: {
      color: `${Common.default.colors.mainColor.main7}`,
      border: `1px solid ${Common.default.colors.mainColor.main7}`,
    },
  },
};

const CustomButton = styled.button<{
  variant: "primary" | "secondary";
  isLoading?: boolean;
  style?: React.CSSProperties;
  fakeDisabled?: boolean;
  size: SizeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  flex-wrap: nowrap;
  box-sizing: border-box;
  font-weight: 600;
  border-radius: 8px;
  border: none;

  ${({ variant }) => style[variant].default};
  ${({ fakeDisabled, variant }) => fakeDisabled && style[variant].disabled}
  min-width: ${({ style, size }) => style?.width || sizeStyle[size].minWidth};
  height: ${({ style, size }) => style?.height || sizeStyle[size].height};
  padding: ${({ style, size }) => style?.padding || sizeStyle[size]?.padding};
  font-size: ${({ style, size }) =>
    style?.fontSize || sizeStyle[size]?.fontSize};
  font-weight: ${({ style, size }) =>
    style?.fontWeight || sizeStyle[size]?.fontWeight};

  :hover {
    ${({ variant, fakeDisabled }) => (fakeDisabled ? "" : style[variant].hover)}
  }

  :disabled {
    ${({ variant }) => style[variant].disabled}
  }

  color: ${({ variant, fakeDisabled }) =>
    fakeDisabled && variant === "primary"
      ? `${Common.default.colors.grayScale.white}`
      : fakeDisabled && variant === "secondary"
        ? `${Common.default.colors.grayScale.gray3}`
        : ""};

  border-color: ${({ fakeDisabled }) =>
    fakeDisabled && `${Common.default.colors.grayScale.gray3}`};
`;
