import { MutableRefObject } from 'react';
type MultiRef = {
    ref1: MutableRefObject<HTMLDivElement | null>;
    ref2?: MutableRefObject<HTMLDivElement | null>;
};
declare const useClickOutSide: (refs: MultiRef, onFocusOut?: () => void, initialState?: boolean) => {
    visible: boolean;
    setVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useClickOutSide;
