import SearchAddress from "@/components/search-address";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof SearchAddress> = {
  title: "components/SearchAddress/SearchAddress",
  component: SearchAddress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchAddress>;

export const PrimarySearchAddress: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    const handleSelectAddress = (data: any) => {
      console.log("data", data);
    };

    return (
      <>
        <button onClick={() => setVisible(true)}>주소검색</button>
        <SearchAddress
          open={visible}
          onClose={() => setVisible(false)}
          onSelect={handleSelectAddress}
        />
      </>
    );
  },
};
