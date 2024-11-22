"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "./button";
import Alert from "./alert";
import { handleKeyDownEnter } from "@/utils/util";

interface Props {
  onClick: (...args: any) => void;
  disabled: boolean;
  checkedLength: number;
  title?: string;
}

const TrashButton = ({ onClick, disabled, checkedLength, title }: Props) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickConfirm = () => {
    onClick();
    setOpen(false);
  };

  const handleClickCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    const eventListener = (e: any) =>
      handleKeyDownEnter(e as any, handleClickConfirm);
    if (open) {
      document.addEventListener("keyup", eventListener);
    } else {
      document.removeEventListener("keyup", eventListener);
    }

    return () => {
      document.removeEventListener("keyup", eventListener);
    };
  }, [open]);

  return (
    <>
      <Button
        onFocus={(e) => e.target.blur()}
        onClick={() => handleClick()}
        variant="secondary"
        disabled={disabled}
        size="tiny"
        style={{ minWidth: 28, padding: 0 }}
      >
        <Image
          src={
            disabled
              ? "https://image.thetak.net/asset/product/images/trash_disabled.svg"
              : theme.image.trash
          }
          width={14}
          height={14}
          alt="trashIcon"
        />
      </Button>

      {open && (
        <Alert
          open={open}
          onConfirm={handleClickConfirm}
          onCancel={handleClickCancel}
          title={title || `${checkedLength}개 항목을 삭제하시겠습니까?`}
        />
      )}
    </>
  );
};

export default TrashButton;
