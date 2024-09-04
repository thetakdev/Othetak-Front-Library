import { useState, forwardRef, useCallback } from "react";
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
  PickersLayout,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ko } from "date-fns/locale";
import { Paper, TextField, TextFieldProps } from "@mui/material";
import Image from "next/image";
import Checkbox from "./checkbox";
import styled from "@emotion/styled";

interface Props {
  name: string;
  value: Date;
  onChange?: (e: Date | boolean, name: string) => void;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  isEndDate?: boolean;
  style?: any;
}
export default forwardRef(function DatePicker(
  {
    name,
    value,
    onChange,
    disabled,
    minDate,
    maxDate,
    isEndDate = false,
    style,
  }: Props,
  ref: any
) {
  const [visible, setVisible] = useState(false);

  const PickerTextField = useCallback(
    ({ ...rest }: TextFieldProps) => (
      <TextField
        {...rest}
        InputProps={{
          ...rest.InputProps,
        }}
      />
    ),
    []
  );

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ko as any}
    >
      <CustomDatePicker
        name={name}
        sx={style}
        value={value}
        onChange={(e: any) => onChange(e, name)}
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        format="yyyy.MM.dd"
        disabled={disabled}
        slots={{
          toolbar: () => (
            <>
              {isEndDate && (
                <Checkbox
                  label="종료일 없음"
                  size="16px"
                  gap="8px"
                  checked={value === null ? true : false}
                  onChange={(e) => onChange(e.target.checked, "noEndDate")}
                  style={CHECKBOX_STYLE}
                />
              )}
            </>
          ),
          desktopPaper: desktopPaper,
          layout: layout,
          rightArrowIcon: rightArrowIcon,
          leftArrowIcon: LeftArrowIcon,

          openPickerIcon: () => (
            <Image
              src={
                disabled
                  ? "https://image.thetak.net/asset/product/images/calender_admin_3.svg"
                  : visible
                    ? "https://image.thetak.net/asset/product/images/calender_admin_main.svg"
                    : "https://image.thetak.net/asset/product/images/calender_admin_3.svg"
              }
              width={16}
              height={16}
              alt="calendar"
            />
          ),
          textField: PickerTextField,
        }}
        visible={visible}
        onOpen={() => setVisible(true)}
        onClose={() => setVisible(false)}
      />
    </LocalizationProvider>
  );
});

const CustomDatePicker = styled(MuiDatePicker)<{
  disabled: boolean;
  visible: boolean;
}>`
  position: relative;
  background-color: ${({ disabled, theme }) =>
    disabled
      ? `${theme.colors.grayScale.gray4}`
      : `${theme.colors.grayScale.white}`};
  border-radius: 8px;

  .MuiOutlinedInput-root {
    width: 110px;
    height: 32px;
    padding: 0px;
    border: ${({ theme }) => `1px solid ${theme.colors.grayScale.gray3}`};
    border-radius: 8px;
    font-size: 12px;
    font-weight: 400;
    z-index: 1;
  }
  .MuiOutlinedInput-input {
    width: 80px;
    padding: 0px;
    padding-left: 7px;
    color: ${({ theme }) => `${theme.colors.grayScale.black}`};
    z-index: 1;
    :focus {
      color: ${({ theme }) => `${theme.colors.grayScale.black}`};
    }
  }
  .MuiIconButton-root {
    display: block;
    padding: 0px;
    padding-right: 18px;
  }
  .MuiIconButton-root:hover {
    background-color: transparent;
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
  .Mui-disabled {
    -webkit-text-fill-color: ${({ theme }) =>
      `${theme.colors.grayScale.gray25}`};
  }
  .MuiTouchRipple-root {
    display: none;
  }
`;

const desktopPaper = styled(Paper)({
  width: "303px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow:
    "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 18px -4px rgba(16, 24, 40, 0.08)",
});

// 수정된 코드
const layout = styled(PickersLayout)(
  ({ theme }: { theme: any }) =>
    ({
      ".MuiDateCalendar-root": {
        width: "263px",
        height: "100%",
        margin: "0px",
      },
      ".MuiPickersCalendarHeader-root": {
        margin: "0",
        marginBottom: "32px",
        padding: "0",
        maxHeight: "23px",
        minHeight: "23px",
      },
      ".MuiPickersCalendarHeader-labelContainer": {
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translate(-50%)",
        margin: "0",
        marginLeft: "8px",
        height: "23px",
      },
      ".MuiPickersCalendarHeader-label": {
        fontSize: "18px",
        fontWeight: "700",
      },
      ".MuiPickersCalendarHeader-switchViewButton": {
        color: `${theme.colors.grayScale.black}`, // theme 객체 접근
      },
      ".MuiPickersCalendarHeader-switchViewButton:hover": {
        backgroundColor: "transparent",
      },
      ".MuiButtonBase-root": {
        boxShadow: "border-box",
        width: "24px",
        height: "24px",
        padding: "6px",
      },
      ".MuiIconButton-edgeStart": {
        position: "absolute",
        top: "20px",
        right: "20px",
        padding: "0px",
      },
      ".MuiIconButton-edgeEnd": {
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "0px",
      },
      ".MuiPickersArrowSwitcher-button": {
        backgroundColor: "transparent",
      },
      ".MuiPickersArrowSwitcher-button:hover": {
        backgroundColor: `transparent`,
      },
      ".MuiTouchRipple-root": {
        display: "none",
      },
      ".MuiDayCalendar-header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "24px",
        span: {
          color: "#2D31A6",
          fontSize: "14px",
        },
        "span:nth-of-type(1)": {
          color: "#FEA3B4",
        },
        "span:nth-of-type(7)": {
          color: "#8098F9",
        },
        ".MuiTypography-root": {
          width: "24px",
          height: "24px",
          padding: "6px",
          lineHeight: "24px",
        },
      },
      ".MuiPickersSlideTransition-root": {
        minHeight: "210px",
      },
      ".MuiPickersDay-root": {
        color: `${theme.colors.grayScale.black}`,
        fontSize: "14px",
        fontWeight: "500",
        width: "24px",
        height: "24px",
        borderRadius: "6px",
        lineHeight: "24px",
      },
      ".MuiDayCalendar-weekContainer": {
        boxSizing: "content-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "18px",
        margin: "0px",
        paddingTop: "8px",
        paddingBottom: "8px",
      },
      ".Mui-selected": {
        color: `${theme.colors.grayScale.white}`,
        backgroundColor: `${theme.colors.mainColor.main4} !important`,
        borderRadius: "6px",
      },
      ".MuiPickersDay-root:hover": {
        backgroundColor: `${theme.colors.mainColor.main2}`,
        borderRadius: "6px",
      },
      ".MuiPickersDay-root:focus": {
        backgroundColor: `${theme.colors.mainColor.main2}`,
        borderRadius: "6px",
      },
      ".MuiYearCalendar-root": {
        display: "flex",
        width: "263px",
        padding: "0px",
      },
      ".MuiPickersYear-root": {
        height: "36px",
      },
      ".MuiPickersYear-yearButton": {
        width: "100%",
        height: "24px",
        margin: "4px",
        padding: "0px",
        fontSize: "14px",
        fontWeight: "500",
      },
      ".MuiPickersYear-yearButton:hover": {
        backgroundColor: `${theme.colors.mainColor.main2}`,
        borderRadius: "6px",
      },
    }) as any
) as any;

const rightArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url("/images/icon/arrow/arrow_right_admin_8.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const LeftArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url("/images/icon/arrow/arrow_left_admin_8.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const CHECKBOX_STYLE: any = {
  position: "absolute",
  right: "20px",
  bottom: "16px",
  fontSize: "14px",
  lineHeight: "14px",
  zIndex: "1",
};
