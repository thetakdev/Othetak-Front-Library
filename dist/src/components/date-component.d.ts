import { Dispatch, SetStateAction } from 'react';
interface Props {
    control: any;
    setValue: (...rest: any) => any;
    getValues: (...rest: any) => any;
    watch: (...rest: any) => any;
    alignment: string;
    setAlignment: Dispatch<SetStateAction<string>>;
}
declare function DateComponent({ control, setValue, getValues, watch, alignment, setAlignment }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export default DateComponent;
