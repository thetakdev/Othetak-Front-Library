"use client";
import { Modal } from "@mui/material";
import styled from "@emotion/styled";
import Button from '@/components/button';

interface Props {
  open: boolean;
  title: string;
  subTitle?: string;
  cancelText?: string;
  confirmText?: string;
  bottomContent?: React.ReactNode;
  hideBottomContent?: boolean;
  isLoading?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export default function Alert({
  open,
  title,
  subTitle,
  cancelText = "닫기",
  confirmText = "확인",
  bottomContent,
  hideBottomContent = false,
  isLoading = false,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <E_Modal open={open}>
      <E_Container>
        {title && <span className="title">{title}</span>}
        {subTitle && <span className="subTitle">{subTitle}</span>}

        {hideBottomContent === false && (
          <E_ButtonWrapper>
            {bottomContent ? (
              bottomContent
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={onCancel}
                  style={BUTTON_STYLE}
                >
                  {cancelText}
                </Button>

                <Button
                  isLoading={isLoading}
                  onClick={onConfirm}
                  style={BUTTON_STYLE}
                >
                  {confirmText}
                </Button>
              </>
            )}
          </E_ButtonWrapper>
        )}
      </E_Container>
    </E_Modal>
  );
}

const E_Modal = styled(Modal)`
  z-index: 9999;
`;

const E_Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 308px;
  padding: 32px 80px;
  
  border-radius: 16px;
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 18px -4px rgba(16, 24, 40, 0.08);

  &:focus {
    outline: none;
  }

  .title {
    
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    white-space: pre-wrap;
  }

  .subTitle {
    margin-top: 20px;
    
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    white-space: pre-wrap;
  }
`;

const E_ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`;

const BUTTON_STYLE = {
  width: "106px",
  height: "36px",
};
