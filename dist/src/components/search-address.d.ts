interface KAKAO_ADDRESS_PROPS {
    open: boolean;
    onClose: (visible: boolean) => void;
    onSelect: (rest: any) => void;
}
declare const SearchAddress: ({ open, onClose, onSelect }: KAKAO_ADDRESS_PROPS) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SearchAddress;
