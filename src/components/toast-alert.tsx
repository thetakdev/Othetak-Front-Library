'use client';
import { COLORS } from '@/styles/common';
import styled from '@emotion/styled';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastAlert(message: string) {
  return <E_Container>{message}</E_Container>;
}

const E_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 256px;
  min-height: 38px;
  padding: 10px 60px;
  color: ${COLORS.grayScale.white};
  background-color: ${COLORS.mainColor.main9};
  border-radius: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  white-space: pre-line;
`;
