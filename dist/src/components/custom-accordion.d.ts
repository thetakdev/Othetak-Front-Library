interface Props {
    open?: boolean;
    square?: boolean;
    style?: React.CSSProperties;
    summary?: React.ReactNode;
    details?: React.ReactNode;
    defaultExpanded?: boolean;
}
export default function CustomAccordion({ open, square, style, summary, details, defaultExpanded, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const CustomAccordionSummary: import("@emotion/styled").StyledComponent<import("@mui/material").AccordionSummaryOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "children" | "style" | "disabled" | "tabIndex" | "classes" | "sx" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "expandIcon"> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const CustomAccordionDetails: import("@emotion/styled").StyledComponent<import("@mui/material").AccordionDetailsProps & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export {};
