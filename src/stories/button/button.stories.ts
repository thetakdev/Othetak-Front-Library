import Button from "@/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Button/Button",
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    className: "",
    variant: "primary",
    isLoading: false,
    disabled: false,
    onClick: () => {},
    style: {},
    children: "primary",
  },
};

export const SecondaryButton: Story = {
  args: {
    className: "",
    variant: "secondary",
    isLoading: false,
    disabled: false,
    onClick: () => {},
    style: {},
    children: "secondary",
  },
};