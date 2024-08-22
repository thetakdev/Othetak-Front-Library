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
declare const _default: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<unknown>>;
export default _default;
