"use client";
import { Modal as CustomModal, ModalTypeMap } from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/styles/common";
import styled from "@emotion/styled";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  hideBackdrop?: boolean;
  isClose?: boolean;
  closeSize?: number;
  closeStyle?: React.CSSProperties;
  children: React.ReactNode;
  title?: string;
  modalOption?: OverridableComponent<ModalTypeMap<"div", {}>>;
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
  title,
  modalOption,
}: Props) {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      hideBackdrop={hideBackdrop}
      {...modalOption}
    >
      <EContainer style={style}>
        {title && <h3 className="title">{title}</h3>}
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
  background-color: ${COLORS.grayScale.white};
  border-radius: 8px;
  border: 1px solid ${COLORS.grayScale.gray3};

  :focus {
    outline: none;
  }

  .title {
    margin: 0px;
    margin-bottom: 20px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
