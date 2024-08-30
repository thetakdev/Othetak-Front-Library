import Select from "@/components/select";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Select> = {
  title: "components/Select/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PrimarySelect: Story = {
  render: () => {
    const initialParams = {
      userTypeCode: 2,
    };
    const { control, getValues } = useForm({
      defaultValues: initialParams,
    });

    const OPTIONS = [
      { label: "선택1", value: 1 },
      { label: "선택2", value: 2 },
      { label: "선택3", value: 3 },
      { label: "선택4", value: 4 },
      { label: "선택1", value: 5 },
      { label: "선택2", value: 6 },
      { label: "선택3", value: 7 },
      { label: "선택4", value: 8 },
      { label: "선택1", value: 1 },
      { label: "선택2", value: 2 },
      { label: "선택3", value: 3 },
      { label: "선택4", value: 4 },
      { label: "선택1", value: 5 },
      { label: "선택2", value: 6 },
      { label: "선택3", value: 7 },
      { label: "선택4", value: 8 },
      { label: "선택1", value: 1 },
      { label: "선택2", value: 2 },
      { label: "선택3", value: 3 },
      { label: "선택4", value: 4 },
      { label: "선택1", value: 5 },
      { label: "선택2", value: 6 },
      { label: "선택3", value: 7 },
      { label: "선택4", value: 8 },
    ];

    useEffect(() => {
      console.log("getValues", getValues());
    }, [getValues()]);

    return (
      <>
        <div>
          <h1>Select</h1>
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="tiny"
            placeholder="선택"
          />
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="tiny"
            placeholder="선택"
            disabled
          />
        </div>
        <div>
          <h1>MultiSelect</h1>
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="tiny"
            placeholder="선택"
            multiSelect
          />
        </div>
        <div>
          <h1>전체 선택</h1>
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="tiny"
            placeholder="선택"
            multiSelect
            allCheck
          />
        </div>

        <div>
          <h1>SIZE</h1>
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="small"
            multiSelect
          />
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="normal"
          />
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="big"
          />
          <Select
            control={control}
            name="userTypeCode"
            option={OPTIONS}
            size="responsive"
          />
        </div>
      </>
    );
  },
};
