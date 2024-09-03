import { ToggleSwitch } from "@/components/toggle-switch";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof ToggleSwitch> = {
  title: "components/ToggleSwitch/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const PrimaryToggle: Story = {
  render: () => {
    const [toggle, setToggle] = useState(false);
    return (
      <ToggleSwitch
        checked={toggle}
        onChange={() => setToggle(!toggle)}
      />
    );
  },
};
