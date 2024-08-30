import Accordion from "@/components/accordion";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "components/Accordion/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Accordion_1: Story = {
  render: () => {
    return (
      <Accordion
        summary={
          <div className="header">
            <div className="circle" />
            <b className="dot">기본 관리</b>
          </div>
        }
        details={<div>내용내용</div>}
      />
    );
  },
};
