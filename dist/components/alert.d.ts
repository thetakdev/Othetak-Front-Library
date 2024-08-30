interface Props {
    open: boolean;
    title: string;
    subTitle?: string;
    cancelText?: string;
    confirmText?: string;
    bottomContent?: React.ReactNode;
    hideBottomContent?: boolean;
    isLoading?: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
}
export default function Alert({ open, title, subTitle, cancelText, confirmText, bottomContent, hideBottomContent, isLoading, onCancel, onConfirm, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
