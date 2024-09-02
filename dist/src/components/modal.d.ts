/// <reference types="react" />
interface Props {
    open: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
    hideBackdrop?: boolean;
    isClose?: boolean;
    closeSize?: number;
    closeStyle?: React.CSSProperties;
    children: React.ReactNode;
}
export default function Modal({ open, onClose, style, hideBackdrop, isClose, closeSize, closeStyle, children }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
