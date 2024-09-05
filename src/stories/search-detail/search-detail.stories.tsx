"use client";
import { Description } from "@/components/description";
import SearchDetail from "@/components/search-detail";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof SearchDetail> = {
  title: "components/SearchDetail/SearchDetail",
  component: SearchDetail,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchDetail>;

export const PrimarySearchDetail: Story = {
  render: () => {
    const { register, setValue } = useForm({
      defaultValues: {
        searchWord: "",
      },
    });

    const handleClickReset = () => {
      setValue("searchWord", "");
    };

    const handleClickSearch = () => {
      console.log("검색!");
    };

    return (
      <>
        <SearchDetail
          isLoading={false}
          onClickReset={handleClickReset}
          onClickSearch={handleClickSearch}
          inputOption={{
            register,
            name: "searchWord",
          }}
        >
          <Description item xs={4}>
            <label>부서명</label>
            <div className="content">ㅇ</div>
          </Description>
          <Description item xs={4}>
            <label>부서명</label>
            <div className="content">ㅇ</div>
          </Description>
          <Description item xs={4}>
            <label>부서명</label>
            <div className="content">ㅇ</div>
          </Description>
        </SearchDetail>
      </>
    );
  },
};
