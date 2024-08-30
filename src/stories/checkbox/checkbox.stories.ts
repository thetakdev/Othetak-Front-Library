import Checkbox from "@/components/checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const SquareCheckbox: Story = {
  args: {
    shape: "square",
    label: "라벨!",
  },
};

export const CircleCheckbox: Story = {
  args: {
    shape: "circle",
    label: "라벨!",
    requiredPosition: "after",
  },
};
