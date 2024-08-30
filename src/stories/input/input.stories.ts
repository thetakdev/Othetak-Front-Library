import Input from "@/components/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "components/Input/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "big", "tiny", "responsive"],
      control: { type: "radio" },
    },
    adornment: {
      position: {
        options: ["start", 'end'],
        control: { type: "radio" },
      },
    },
  },

};

export default meta;
type Story = StoryObj<typeof Input>;

export const PrimaryInput: Story = {
  args: {
    className: "",
    disabled: false,
    size: "small",
  },
};

export const AdornmentInput: Story = {
  args: {
    className: "",
    disabled: false,
    size: "small",
    adornment: {
      adornment: "img",
      position: "end",
      gap: 0
    },
  },
};
