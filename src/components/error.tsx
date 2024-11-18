import { COLORS } from '@/styles/common';
import { CSSProperties } from 'react';

interface ERROR_PROPS<T> {
  message: string;
  style?: CSSProperties;
}

const Error = <T,>({ message, style = { color: COLORS.errorColor.errorMain } }: ERROR_PROPS<T>) => {
  return (
    Boolean(message) && (
      <div style={style} className="error">
        {message}
      </div>
    )
  );
};

export default Error;
