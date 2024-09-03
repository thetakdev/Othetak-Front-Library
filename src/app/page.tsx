"use client";
import { Description } from "@/components/description";
import SearchDetail from "@/components/search-detail";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
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

  const initialParams = {
    userTypeCode: 2,
  };

  const { control, getValues } = useForm({
    defaultValues: initialParams,
  });

  const OPTIONS = [
    { label: "선택1", value: 1 },
    { label: "선택2asdan만우ㅏ뭉나jandsn", value: 2 },
    { label: "선ㅁㄴ움ㄴ야ㅜ마ㅜ남ㅇ택3", value: 3 },
    { label: "선택4", value: 4 },
    { label: "선택1", value: 5 },
    { label: "선택2", value: 6 },
  ];

  return (
    <>
      <SearchDetail
        isLoading={false}
        placeholder="제목을 입력해주세요."
        onChange={onChange}
        value={input}
        onClickReset={handleClickReset}
        onClickSearch={handleClickSearch}
        selectOption={{
          control: control,
          name: "userTypeCode",
          option: OPTIONS,
          size: "tiny",
          selectStyle: {width: 120}
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
};

export default Page;
