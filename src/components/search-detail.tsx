import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Collapse, Grid } from "@mui/material";
import Select, { SELECT_PROPS } from "./select";
import Input, { INPUT_PROPS } from "./input";
import { useTheme } from "@emotion/react";
import Button from "./button";

interface Props {
  children?: React.ReactNode;
  onClickReset: () => void;
  onClickSearch: () => void;
  selectOption?: SELECT_PROPS;
  inputOption?: INPUT_PROPS;
  isLoading: boolean;
}

const SearchDetail = ({
  children,
  onClickReset,
  onClickSearch,
  inputOption,
  selectOption,
  isLoading,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const handleClickDetailSearch = () => {
    setVisible(!visible);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleEscKeyPress = (event: any) => {
      if (event.keyCode === 27) {
        setVisible(false);
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  const handleClickSearch = () => {
    setVisible(false);
    onClickSearch();
  };

  const handleKeyDownEnter = (
    e: React.KeyboardEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLElement
    >,
    callback: (callback?: (...rest: any) => any) => any
  ) => {
    if (e.key === "Enter") callback();
  };

  return (
    <SearchContainer ref={ref} visible={visible}>
      <div className="inputWrapper">
        {selectOption ? <Select {...selectOption} /> : <></>}
        <Input
          size="responsive"
          onKeyDown={(e) => handleKeyDownEnter(e as any, handleClickSearch)}
          adornment={
            !visible
              ? {
                  adornment: (
                    <Button
                      onClick={handleClickSearch}
                      isLoading={isLoading}
                      style={{
                        width: 31,
                        height: 31,
                        padding: 0,
                        borderTopRightRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                    >
                      <Image
                        src="https://image.thetak.net/asset/product/images/lenz_white.svg"
                        width="20"
                        height="20"
                        alt="magnification"
                      />
                    </Button>
                  ),
                  position: "end",
                  gap: 0,
                }
              : undefined
          }
          {...inputOption}
        />

        {children ? (
          <Button
            variant="secondary"
            size="small"
            style={{
              fontSize: 12,
              border: "none",
              color: theme.colors.mainColor.main7,
            }}
            onClick={handleClickDetailSearch}
          >
            상세검색
            <Image
              src="https://image.thetak.net/asset/product/images/arrow_down_admin_main.svg"
              width="14"
              height="14"
              alt="arrow"
              style={{
                transition: "transform 0.35s",
                transform: visible ? "rotate(180deg)" : "",
              }}
            />
          </Button>
        ) : (
          <></>
        )}
      </div>
      {children && (
        <StyledCollapse in={visible} style={{ paddingTop: 16 }}>
          <div className="container">
            <Grid
              style={{
                borderTop: `1px solid ${theme.colors.mainColor.main3}`,
              }}
              container
            >
              {children}
            </Grid>

            <div className="buttonWrapper">
              <Button onClick={onClickReset} size="small" variant="secondary">
                초기화
              </Button>
              <Button
                isLoading={isLoading}
                onClick={handleClickSearch}
                size="small"
              >
                검색
              </Button>
            </div>
          </div>
        </StyledCollapse>
      )}
    </SearchContainer>
  );
};

export default React.memo(SearchDetail);

const StyledCollapse = styled(Collapse)`
  position: absolute;
  left: -1px;
  top: 23px;
  width: 100%;
  z-index: 9999;
  .container {
    padding: 16px 30px 32px 30px;
    box-shadow:
      0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 12px 18px -4px rgba(16, 24, 40, 0.08);
    background: white;
    width: calc(100% - 60px);
  }

  .buttonWrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;

    button {
      padding: 0px 21px;
    }
  }
`;

const SearchContainer = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  border-bottom-left-radius: ${({ visible }) => (visible ? "0px" : "8px")};
  border-bottom-right-radius: ${({ visible }) => (visible ? "0px" : "8px")};
  padding: 0px 2px;
  border: ${({ theme }) => `1px solid ${theme.colors.grayScale.white}`};
  box-sizing: border-box;
  box-shadow:
    0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);

  .inputWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .startAdornment {
    position: absolute;
    left: 8px;
    padding: 0px 8px;
    border-right: ${({ theme }) => `1px solid ${theme.colors.grayScale.gray3}`};
    height: 32px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.grayScale.gray1};
    font-size: 12px;
  }
`;
