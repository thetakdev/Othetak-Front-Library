import Pagination from "@/components/pagination";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "components/Pagination/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PrimaryToggle: Story = {
  render: () => {
    const [pagination, setPagination] = useState({
      page: 1,
      perPage: 50,
      totalCount: 10,
      pageCount: 1,
    });

    const handleChangePagination = (e: number) => {
      setPagination({
        ...pagination,
        page: e,
      });
    };

    return (
      <Pagination
        pageData={pagination}
        onChange={handleChangePagination}
        isLoading={false}
      />
    );
  },
};
