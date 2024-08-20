import styled from '@emotion/styled';
import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} style={{   }} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: string; size: string }>`
  /* 스타일 정의 */
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#0070f3' : '#eaeaea'};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#000')};
  padding: ${({ size }) =>
    size === 'small'
      ? '6px 12px'
      : size === 'large'
      ? '10px 20px'
      : '8px 16px'};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'primary' ? '#005bb5' : '#cacaca'};
  }
`;

export default Button;
