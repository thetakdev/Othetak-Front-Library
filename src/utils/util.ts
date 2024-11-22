import ToastAlert from "@/components/toast-alert";
import { toast } from "react-toastify";

/**
 * [토스트 발생 함수]
 */
export const toastAlert = (message: string) => {
  const notify = () =>
    toast["success"](ToastAlert(message), {
      hideProgressBar: true,
      autoClose: 2000,
      progress: 0,
      icon: false,
      toastId: message,
      position: "bottom-center",
    });
  notify();
  return notify;
};

/**
 * [날짜 검사 함수]
 */
export const isEndDateValid = (startDate: Date, endDate: Date) => {
  if (!endDate) return false;

  // 종료일이 시작일보다 이전일 경우
  const start = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const end = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );

  return end.getTime() < start.getTime();
};

/**
 * [날짜 유효성 검사 함수]
 */
export const dateValidation = (date: Date) => {
  if (date === null || isNaN(date.getTime())) {
    return true;
  } else {
    return false;
  }
};

/**
 * [빈 값인 경우 하이픈 리턴]
 */
export const returnHyphenIfEmpty = <T>(value: T): T | string => {
  return value ? value : "-";
};

/**
 * 1, 2, 3, 14' => ['01', '02', '03', '14']
 */
export const convertToTwoDigitNumbers = (numbersString: string) => {
  const numbersArray = numbersString?.split(",").map(Number);

  const twoDigitNumbersArray =
    numbersArray?.map((num) => String(num).padStart(2, "0")) || [];

  return twoDigitNumbersArray || [];
};

export const isNumber = (data: string | number): boolean => {
  return !isNaN(Number(data));
};

export const validExcelWord = (data: string, validWordList: string[]) => {
  if (data === null) return null;
  const upperCaseStringArray = validWordList.map((item) =>
    item.toLocaleUpperCase()
  );

  let result = upperCaseStringArray.findIndex(
    (item) => data.toUpperCase() === item
  );

  return result === -1 ? null : validWordList[result];
};

export const removeComma = (numberString: string) => {
  return typeof "string" ? numberString.replace(/,/g, "") : numberString;
};

export const removeHyphen = (string: string) => {
  return string.replace(/-/g, "");
};

/**
 * [Enter 입력시 실행하는 함수]
 */
export const handleKeyDownEnter = <T>(
  e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLElement>,
  callback: (callback?: T) => any
) => {
  if (e.key === "Enter") callback();
};
