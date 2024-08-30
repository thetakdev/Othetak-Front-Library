"use client";
import { InputHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

// 타입 정의
type SizeType = "big" | "small" | "tiny" | "responsive";
type StatusType = "normal" | "error";

interface Props extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  className?: string;
  register?: any;
  name?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  adornment?: {
    adornment: React.ReactNode;
    position: "start" | "end";
    gap?: number;
  };
  adornmentStyle?: React.CSSProperties;
  size?: SizeType;
  status?: StatusType;
}

// 컴포넌트
export default forwardRef(function Input(
  {
    className,
    register,
    name,
    style,
    inputStyle,
    adornment,
    adornmentStyle,
    size = "big",
    status = "normal",
    ...rest
  }: Props,
  ref
) {
  return (
    <EContainer
      className={className}
      style={style}
      size={size}
      status={status}
      position={adornment?.position}
      gap={adornment?.gap}
      inputStyle={inputStyle}
    >
      <input
        {...register ? {...register(name)} : undefined}
        autoComplete="off"
        style={inputStyle}
        {...rest}
      />

      <div className="adornment-wrapper" style={adornmentStyle}>
        {adornment?.adornment}
      </div>
    </EContainer>
  );
});

// 스타일 정의
const EContainer = styled.div<{
  size: SizeType;
  status?: StatusType;
  inputStyle?: React.CSSProperties;
  position?: "start" | "end";
  gap?: number;
}>(({ theme, size, status, inputStyle, position, gap }) => {
  return {
    display: 'flex',
    position: "relative",
    width: inputStyle?.width || SIZE_STYLE[size].width,
    input: {
      border: STATUS_STYLE(theme)[status].border,
      backgroundColor: STATUS_STYLE(theme)[status].backgroundColor,
      width: inputStyle?.width || SIZE_STYLE[size].width,
      height: inputStyle?.height || SIZE_STYLE[size].height,
      fontSize: inputStyle?.fontSize || SIZE_STYLE[size].fontSize,
      borderRadius: "8px",
      padding: "10px 12px",
      paddingRight: position === "end" ? `20px` : "10px",
      paddingLeft: position === "start" ? `20px` : "10px",
      fontWeight: 400,
      "::placeholder": {
        color: theme.colors.grayScale?.gray3,
      },
      ":focus": {
        borderColor: theme.colors.mainColor.main,
      },
      ":focus-visible": {
        outline: "none",
      },
      ":disabled": {
        color: theme.colors.grayScale?.gray25,
        backgroundColor: theme.colors?.grayScale.gray4,
      },
    },
    ".adornment-wrapper": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      right: position === "end" ? `${gap}px` : "",
      left: position === "start" ? `${gap}px` : "",
    },
  };
});

const STATUS_STYLE = (theme: any) => ({
  normal: {
    border: `1px solid ${theme.colors?.grayScale.gray3}`,
    backgroundColor: "#FFF",
  },
  error: {
    border: `1px solid ${theme.colors?.errorColor.errorMain}`,
    backgroundColor: theme.colors?.errorColor.error3,
  },
});

const SIZE_STYLE: { [key in SizeType]: React.CSSProperties } = {
  big: {
    width: "320px",
    height: "44px",
    fontSize: "16px",
  },
  small: {
    width: "137px",
    height: "32px",
    fontSize: "12px",
  },
  tiny: {
    width: "137px",
    height: "28px",
    fontSize: "12px",
  },
  responsive: {
    width: "100%",
    height: "32px",
    fontSize: "12px",
  },
};
