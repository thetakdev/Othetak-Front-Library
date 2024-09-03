"use client";
import { Description, DescriptionContainer } from "@/components/description";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Description> = {
  title: "components/Description/Description",
  component: Description,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Description>;

export const PrimaryDescription: Story = {
  render: () => {
    return (
      <div>
        <DescriptionContainer container>
          <Description item xs={12}>
            <label>부서명</label>
            <div className="content">ㅇdd</div>
          </Description>
          <Description item xs={4}>
            <label>부서명2</label>
            <div className="content">ㅇ</div>
          </Description>
          <Description item xs={4}>
            <label>부서명3</label>
            <div className="content">ㅇasd</div>
          </Description>
          <Description item xs={4}>
            <label>부서명3</label>
            <div className="content">ㅇasd</div>
          </Description>
          <Description item xs={8} className="noBorder">
            <label>부서명3</label>
            <div className="content">ㅇasd</div>
          </Description>
          <Description item xs={4} className="noBorder">
            <label>부서명3</label>
            <div className="content">ㅇasd</div>
          </Description>
        </DescriptionContainer>
      </div>
    );
  },
};
