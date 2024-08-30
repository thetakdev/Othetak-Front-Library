import Modal from "@/components/modal";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "components/Modal/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const PrimaryModal: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <button onClick={() => setVisible(true)}>모달</button>
        <Modal onClose={() => setVisible(false)} open={visible}>
            내용내용
        </Modal>
      </>
    );
  },
};
