'use client';
import { Box, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import CustomDatePicker from '@/components/date-picker';
import { COLORS } from '@/styles/common';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  control: any;
  setValue: (...rest: any) => any;
  getValues: (...rest: any) => any;
  watch: (...rest: any) => any;
  alignment: string;
  setAlignment: Dispatch<SetStateAction<string>>;
}

function DateComponent({ control, setValue, getValues, watch, alignment, setAlignment }: Props) {
  const handleChangeDate = (date: Date | boolean, name: any) => {
    setValue(name, date);
  };

  // 날짜 토글 버튼 선택
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setValue('startDate', dayjs().subtract(Number(newAlignment), 'day').toDate());
      setValue('endDate', new Date());
      if (newAlignment === '-1') {
        setValue('endDate', null);
        setValue('startDate', null);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <CustomDatePicker
            {...field}
            value={watch('startDate') ? new Date(getValues('startDate')) : null}
            maxDate={watch('endDate') ? new Date(getValues('endDate')) : new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            onChange={handleChangeDate}
          />
        )}
      />
      <Box sx={{ mx: '3px' }}>~</Box>
      <Controller
        name="endDate"
        control={control}
        render={({ field }) => (
          <CustomDatePicker
            {...field}
            value={watch('endDate') ? new Date(getValues('endDate')) : null}
            minDate={watch('startDate') && new Date(getValues('startDate'))}
            onChange={handleChangeDate}
          />
        )}
      />
      <StyledToggleButtonGroup
        sx={{ ml: '8px', gap: '4px' }}
        value={alignment}
        size="small"
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton disableRipple={true} value="-1">
          전체
        </ToggleButton>
        <ToggleButton disableRipple={true} value="0">
          오늘
        </ToggleButton>
        <ToggleButton disableRipple={true} value="1">
          어제
        </ToggleButton>
        <ToggleButton disableRipple={true} value="30">
          -30일
        </ToggleButton>
        <ToggleButton disableRipple={true} value="90">
          -90일
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  '.MuiToggleButton-root': {
    color: COLORS.mainColor.main,
  },
  '.MuiButtonBase-root.Mui-selected': {
    color: '#FFFFFF',
    backgroundColor: COLORS.mainColor.main,
    '&:hover': {
      backgroundColor: COLORS.mainColor.main,
    },
  },
  '.MuiToggleButtonGroup-grouped': {
    height: '28px',
    minWidth: '39px',
    borderRadius: '8px',
    border: `1px solid ${COLORS.mainColor.main}`,

    '&:not(:first-of-type)': {
      borderRadius: '8px',
      border: `1px solid ${COLORS.mainColor.main}`,
    },
    '&:not(:last-of-type)': {
      borderRadius: '8px',
    },
    '&:first-of-type': {
      borderRadius: '8px',
    },
  },
}));

export default DateComponent