interface ImageSettingProps {
    onChange: (e: any, type: IMAGE_TYPE) => void;
    onClickRemove: () => void;
    type?: IMAGE_TYPE;
    path: string;
    name: string;
    isEdit?: boolean;
}
export type IMAGE_TYPE = "single" | "multi";
declare const ImageSetting: ({ onChange, onClickRemove, type, path, name, isEdit, }: ImageSettingProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ImageSetting;
