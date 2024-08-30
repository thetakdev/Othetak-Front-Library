import Alert from "@/components/alert";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Alert> = {
  title: "components/Modal/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const PrimaryAlert: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <button onClick={() => setVisible(true)}>얼럿열기</button>
        <Alert
          title="타이틀"
          subTitle="서브타이틀"
          onCancel={() => setVisible(false)}
          onConfirm={() => setVisible(false)}
          open={visible}
        />
      </>
    );
  },
};
