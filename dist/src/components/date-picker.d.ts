interface Props {
    name: string;
    value: Date;
    onChange?: (e: Date | boolean, name: string) => void;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    isEndDate?: boolean;
    style?: any;
}
declare const _default: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<unknown>>;
export default _default;
