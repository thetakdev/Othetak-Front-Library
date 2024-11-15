"use client";
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

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

const Button = ({
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
}: ButtonProps) => {
  const theme = useTheme();
  const { disabled, style } = rest;

  const loadingStyle = {
    width: parseInt((style?.height as string) || "37px") / 2,
    height: parseInt((style?.height as string) || "37px") / 2,
    color: theme.colors.mainColor.main,
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
      theme={theme} // 테마 전달
    >
      {!isLoading && startIcon}
      {isLoading ? <CircularProgress style={loadingStyle} /> : children}
      {!isLoading && endIcon}
    </CustomButton>
  );
};

export default Button;

const sizeStyle: any = {
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

const buttonStyle = (theme: any): any => ({
  primary: {
    default: {
      color: theme.colors.grayScale.white,
      backgroundColor: theme.colors.mainColor.main,
    },
    disabled: {
      color: theme.colors.grayScale.white,
      backgroundColor: theme.colors.grayScale.gray3,
    },
    hover: {
      backgroundColor: theme.colors.mainColor.main7,
    },
  },
  secondary: {
    default: {
      color: theme.colors.mainColor.main,
      backgroundColor: theme.colors.grayScale.white,
      border: `1px solid ${theme.colors.mainColor.main}`,
    },
    disabled: {
      color: theme.colors.grayScale.gray3,
      backgroundColor: theme.colors.grayScale.white,
      border: `1px solid ${theme.colors.grayScale.gray3}`,
    },
    hover: {
      color: theme.colors.mainColor.main7,
      border: `1px solid ${theme.colors.mainColor.main7}`,
    },
  },
});

const CustomButton = styled.button<{
  variant: "primary" | "secondary";
  isLoading?: boolean;
  style?: React.CSSProperties;
  fakeDisabled?: boolean;
  size: SizeType;
}>(({ theme, variant, size, style, fakeDisabled }: any): any => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  flexWrap: "nowrap",
  boxSizing: "border-box",
  borderRadius: "8px",
  border: "none",
  ...buttonStyle(theme)[variant].default,
  ...(fakeDisabled && buttonStyle(theme)[variant].disabled),
  minWidth: style?.width || sizeStyle[size].minWidth,
  height: style?.height || sizeStyle[size].height,
  padding: style?.padding || sizeStyle[size]?.padding,
  fontSize: style?.fontSize || sizeStyle[size]?.fontSize,
  fontWeight: style?.fontWeight || sizeStyle[size]?.fontWeight,
  ":hover": fakeDisabled ? "" : buttonStyle(theme)[variant].hover,
  ":disabled": buttonStyle(theme)[variant].disabled,
  borderColor: fakeDisabled ? theme.colors.grayScale.gray3 : "",
}));
