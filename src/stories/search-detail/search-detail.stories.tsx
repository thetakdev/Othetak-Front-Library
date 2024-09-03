"use client";
import { Description } from "@/components/description";
import SearchDetail from "@/components/search-detail";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof SearchDetail> = {
  title: "components/SearchDetail/SearchDetail",
  component: SearchDetail,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchDetail>;

export const PrimarySearchDetail: Story = {
  render: () => {
    const [input, setInput] = useState("");
    const onChange = (e: any) => {
      setInput(e.target.value);
    };

    const handleClickReset = () => {
      setInput("");
    };

    const handleClickSearch = () => {
      console.log("검색!");
    };

    return (
      <>
        <SearchDetail
          isLoading={false}
          placeholder="제목을 입력해주세요."
          onChange={onChange}
          value={input}
          onClickReset={handleClickReset}
          onClickSearch={handleClickSearch}
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
