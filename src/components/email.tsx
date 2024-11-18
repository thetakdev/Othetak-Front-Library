'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { EMAIL_OPTION } from '@/static/static';
import Input, { StatusType } from './input';
import Select from './select';

interface Props {
  value?: string;
  onChange: (selectedDomain: string) => void;
  disabled?: boolean;
  status?: StatusType;
  selectImgSize?: number;
  style?: React.CSSProperties;
  inputWrapperStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}

const Email = ({
  value = '',
  onChange,
  disabled,
  status = 'normal',
  selectImgSize,
  style,
  inputWrapperStyle,
  inputStyle,
  selectStyle,
}: Props) => {
  const { getValues, control, register, setValue, watch } = useForm({
    defaultValues: {
      email: '',
      inputDomain: '',
      selectDomain: '',
    },
  });

  // watch로 폼 필드 값들을 모니터링
  const email = watch('email');
  const inputDomain = watch('inputDomain');
  const selectDomain = watch('selectDomain');

  useEffect(() => {
    // value prop이 바뀌었을 때 필드 초기화
    if (Boolean(value)) {
      if (value.includes('@')) {
        const [localPart, domainPart] = value.split('@');
        setValue('email', localPart);
        setValue('inputDomain', domainPart);
      } else {
        setValue('email', value);
        setValue('inputDomain', '');
        setValue('selectDomain', '');
      }
    }
  }, [value, setValue]);

  useEffect(() => {
    const selectedDomain = selectDomain ? selectDomain : inputDomain;
    if (email || selectedDomain) {
      onChange(`${email}@${selectedDomain}`);
    } else {
      onChange('');
    }
  }, [email, inputDomain, selectDomain]);

  return (
    <EmailContainer style={style}>
      <div className="email__input-wrapper" style={inputWrapperStyle}>
        <Input disabled={disabled} register={register} name="email" size="small" status={status} inputStyle={inputStyle} />

        <span>@</span>

        <Input
          register={register}
          name="inputDomain"
          value={getValues('selectDomain') === '' ? getValues('inputDomain') : getValues('selectDomain')}
          disabled={selectDomain !== '' || disabled}
          size="small"
          status={status}
          inputStyle={inputStyle}
        />
      </div>

      <Select
        control={control}
        name="selectDomain"
        option={EMAIL_OPTION}
        size="small"
        disabled={disabled}
        selectStyle={{ width: selectStyle?.width ? selectStyle.width : '132px' }}
        labelStyle={{ height: selectStyle?.height }}
        optionStyle={{ height: selectStyle?.height, fontSize: selectStyle?.fontSize }}
        inputStyle={{ fontSize: selectStyle?.fontSize }}
        imgSize={selectImgSize}
      />
    </EmailContainer>
  );
};

export default React.memo(Email);

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .email__input-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
