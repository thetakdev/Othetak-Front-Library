import { InputHTMLAttributes } from "react";
type SizeType = "big" | "small" | "tiny" | "responsive";
type StatusType = "normal" | "error";
interface Props extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    className?: string;
    register: any;
    name: string;
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    adornment?: {
        adornment: React.ReactNode;
        position: "start" | "end";
        gap?: number;
    };
    adornmentStyle?: React.CSSProperties;
    successMessage?: string;
    errorMessage?: string;
    size?: SizeType;
    status?: StatusType;
}
declare const _default: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<unknown>>;
export default _default;
