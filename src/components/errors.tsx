import React from 'react';
import styled from '@emotion/styled';
import { FieldError } from 'react-hook-form';

interface ErrorMessageProps {
  error?: FieldError;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return <ErrorText>{error.message}</ErrorText>;
};

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.errorColor.errorMain};
  font-size: 12px;
  margin-top: 4px;
  margin-left: 8px;
`;

export default ErrorMessage;

