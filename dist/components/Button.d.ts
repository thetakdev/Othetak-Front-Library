import React from 'react';
type ButtonProps = {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
};
declare const Button: ({ variant, size, children, onClick, }: ButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Button;
