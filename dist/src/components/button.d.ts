import React from "react";
import { ButtonHTMLAttributes } from "react";
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
declare const Button: ({ className, variant, size, onClick, children, isLoading, startIcon, endIcon, fakeDisabled, ...rest }: ButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Button;
