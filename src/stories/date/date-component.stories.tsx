import DateComponent from "@/components/date-component";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof DateComponent> = {
  title: "components/Date/DateComponent",
  component: DateComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateComponent>;

export const DateComponent_1: Story = {
  render: () => {
    const initialParams: any = {
      startDate: null,
      endDate: null,
      title: null,
    };

    const { control, getValues, setValue, watch } = useForm({
      defaultValues: initialParams,
    });
    const [alignment, setAlignment] = useState("-1");

    return (
      <DateComponent
        control={control}
        setValue={setValue}
        getValues={getValues}
        watch={watch}
        alignment={alignment}
        setAlignment={setAlignment}
      />
    );
  },
};
