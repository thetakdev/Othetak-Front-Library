import { useState } from "react";
import Image from "next/image";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

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
  size?: "small" | "large";
}

function PaginationComp({
  pageData,
  onChange,
  size = "large",
}: PAGINATION_PROPS) {
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: size === "small" ? "end" : "center",
        alignItems: "center",
        height: size === "small" ? 20 : 40,
        mt: size === "small" ? "5px" : "20px",
      }}
    >
      {pageData && pageData.totalCount > pageData.perPage && (
        <>
          <Pagination
            page={pageData.page}
            count={pageData.pageCount}
            shape="rounded"
            size={size}
            color="secondary"
            onChange={handleChange}
            sx={{
              "& .Mui-selected": {
                backgroundColor: theme.colors.mainColor.main1,
              },
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
                      {size !== "small" && <Box>이전 페이지</Box>}
                    </Stack>
                  ),
                  next: () => (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      sx={{ gap: "8px", fontWeight: 500 }}
                    >
                      {size !== "small" && <Box>다음 페이지</Box>}
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
        </>
      )}
    </Box>
  );
}

export default PaginationComp;
