import React from "react";
export interface SelectOptionType {
    label: string;
    value: string | number | boolean;
}
type Size = "small" | "normal" | "tiny" | "big" | "responsive";
type Status = "normal" | "error";
interface Props {
    className?: string;
    control: any;
    name: string;
    option: SelectOptionType[];
    imgSize?: number;
    selectStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    popperStyle?: React.CSSProperties;
    optionStyle?: React.CSSProperties;
    disabled?: boolean;
    size?: Size;
    status?: Status;
    multiSelect?: boolean;
    allCheck?: boolean;
    placeholder?: string;
}
declare function Select({ className, control, name, option, imgSize, selectStyle, labelStyle, optionStyle, disabled, size, status, multiSelect, allCheck, placeholder, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Select>;
export default _default;
