/// <reference types="react" />
interface Props {
    className?: string;
    size?: string;
    gap?: string;
    style?: React.CSSProperties;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    customLabel?: React.ReactNode;
    requiredPosition?: "before" | "after";
    shape?: "square" | "circle";
    disabled?: boolean;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<unknown>>;
export default Checkbox;
