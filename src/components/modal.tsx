"use client";
import { Modal as CustomModal } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  hideBackdrop?: boolean;
  isClose?: boolean;
  closeSize?: number;
  closeStyle?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Modal({
  open,
  onClose,
  style,
  hideBackdrop = false,
  isClose = true,
  closeSize = 24,
  closeStyle,
  children,
}: Props) {
  return (
    <CustomModal open={open} onClose={onClose} hideBackdrop={hideBackdrop}>
      <EContainer style={style}>
        {isClose && (
          <Image
            className="close"
            src={
              "https://image.thetak.net/asset/product/images/x_close_gray_2.svg"
            }
            alt="close"
            width={closeSize}
            height={closeSize}
            onClick={onClose}
            style={closeStyle}
          />
        )}
        {children}
      </EContainer>
    </CustomModal>
  );
}

const EContainer = styled.div<{ style?: React.CSSProperties }>`
  position: absolute;
  top: ${({ style }) => (style?.top ? style.top : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.grayScale.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};

  :focus {
    outline: none;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
