import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const DescriptionContainer = styled(Grid)<{ isLoading?: boolean }>`
  position: relative;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.mainColor.main};
  border-collapse: collapse;

  &::after {
    display: ${({ isLoading }) => (isLoading ? "block" : "none")};
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.05) !important;
  }

  .loader {
    display: ${({ isLoading }) => (isLoading ? "block" : "none !important")};
  }
`;

export const Description = styled(Grid)`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor.main3};
  border-collapse: collapse;

  &.noBorder {
    border-bottom: none !important;
  }

  & > label {
    border-collapse: collapse;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 48px;
    height: 100%;
    color: ${({ theme }) => theme.colors.grayScale.black};
    font-size: 16px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mainColor.main1};
    width: 110px;
  }
  .require:after {
    content: "*";
    color: ${({ theme }) => theme.colors.errorColor.errorMain};
    margin-left: 2px;
  }

  .content {
    display: flex;
    align-items: center;
    flex: 1;
    background: white;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
