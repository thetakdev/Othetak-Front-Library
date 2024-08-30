import DatePicker from "@/components/date-picker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DatePicker> = {
  title: "components/Date/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const DatePicker_1: Story = {
  render: () => {
    return <DatePicker value={new Date()} name="startDate" />;
  },
};
