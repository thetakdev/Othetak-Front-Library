import { useState } from "react";
import Image from "next/image";
import {
  Box,
  IconButton,
  Input,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import { COLORS } from "@/styles/common";

export type PAGINATION_TYPE = {
  page?: number; // 현재 페이지
  pageCount?: number; // 현재 페이지 내, 데이터 갯수
  perPage?: number; // 페이지당 개수
  totalCount?: number; // 전체개수
};

export interface PAGINATION_PROPS {
  pageData: PAGINATION_TYPE;
  onChange: (page: number) => void;
  isLoading: boolean;
}

export default function PaginationComp({
  pageData,
  onChange,
  isLoading,
}: PAGINATION_PROPS) {
  const [myPage, setMyPage] = useState("");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (value == "0") return;
    value = value.replace(/[^0-9]/g, "");
    if (Number(value) < pageData.pageCount) {
      setMyPage(value);
    } else if (Number(value) === 0) {
      setMyPage("");
    } else {
      setMyPage(pageData.pageCount.toString());
    }
  };

  const handleSubmitPage = () => {
    onChange(Number(myPage));
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        mt: "20px",
      }}
    >
      {pageData && pageData.totalCount > pageData.perPage && (
        <>
          <Pagination
            page={pageData.page}
            count={pageData.pageCount}
            shape="rounded"
            size="large"
            color="secondary"
            onChange={handleChange}
            sx={{
              "& .Mui-selected": { backgroundColor: COLORS.mainColor.main1 },
              "& .MuiPaginationItem-root": { fontWeight: 500 },
            }}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      sx={{ gap: "8px", fontWeight: 500 }}
                    >
                      <Image
                        src={`/images/icon/black/arrow_left.svg`}
                        width={20}
                        height={20}
                        alt="prevButton"
                      />
                      <Box>이전 페이지</Box>
                    </Stack>
                  ),
                  next: () => (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      sx={{ gap: "8px", fontWeight: 500 }}
                    >
                      <Box>다음 페이지</Box>
                      <Image
                        src={`/images/icon/black/arrow_right.svg`}
                        width={20}
                        height={20}
                        alt="nextButton"
                      />
                    </Stack>
                  ),
                }}
                {...item}
              />
            )}
          />
          <Box
            sx={{
              width: 109,
              height: 28,
              display: "flex",
              border: `1px solid ${COLORS.grayScale.gray3}`,
              borderRadius: "6px",
              pl: "6px",
            }}
          >
            <Input
              disableUnderline={true}
              placeholder="이동할 페이지"
              value={myPage}
              onChange={handleChangePage}
              onKeyDown={(e) => handleKeyDownEnter(e, handleSubmitPage)}
              inputProps={{ maxLength: 7 }}
              sx={{ fontSize: 12, pt: "1px" }}
            />
            <IconButton
              size="small"
              sx={{ p: 0 }}
              disabled={isLoading}
              onClick={handleSubmitPage}
            >
              <Image
                src={`/images/icon/${isLoading ? "gray" : "darkgray"}/arrow_right.svg`}
                width={24}
                height={24}
                alt="nextButton"
              />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
}
