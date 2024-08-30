"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "@/components/button";
import { useRef } from "react";
import { COLORS } from "@/styles/common";
import Input from "@/components/input";
import { ASSET_IMAGE_URL } from "@/static/common";

interface ImageSettingProps {
  onChange: (e: any, type: IMAGE_TYPE) => void;
  onClickRemove: () => void;
  type?: IMAGE_TYPE;
  path: string;
  name: string;
  isEdit?: boolean;
}
export type IMAGE_TYPE = "single" | "multi";

const ImageSetting = ({
  onChange,
  onClickRemove,
  type = "multi",
  path,
  name,
  isEdit = true,
}: ImageSettingProps) => {
  const fileRef = useRef(null);

  return (
    <Container>
      {path ? (
        <div className="wrapper">
          <Image
            src={`${ASSET_IMAGE_URL}${path}`}
            style={{ borderRadius: 8 }}
            width={137}
            height={134}
            alt="logo"
            className="image"
          />
          {isEdit && (
            <Image
              onClick={onClickRemove}
              src={"https://image.thetak.net/asset/product/images/bin_trash_gray_1.svg"}
              className="hoverItem"
              width={14}
              height={14}
              alt={"trash"}
            />
          )}
        </div>
      ) : (
        <div
          style={{
            background: COLORS.grayScale.gray4,
            borderRadius: 8,
            width: 137,
            height: 134,
          }}
        />
      )}
      {isEdit ? (
        <>
          <div className="gray_zone">
            • 업로드 사이즈: 1000px*1000px
            <br />
            • 노출 사이즈: 500px*500px
            <br />
            • 업로드 가능 형식: jpg, jpeg, gif, png, bmp
            <br />
          </div>
          <Input
            value={name}
            size={"small"}
            placeholder="업로드한 파일명이 노출됩니다."
            style={{ width: "100%" }}
            // disabled
            adornment={{
              adornment: (
                <Button
                  onClick={() => fileRef.current.click()}
                  style={{ width: 28, height: 28, padding: 0, borderRadius: 6 }}
                >
                  <Image
                    src="https://image.thetak.net/asset/product/images/export_arrow_white.svg"
                    width="14"
                    height="14"
                    alt="upload-image"
                  />
                </Button>
              ),
              position: "end",
              gap: 2,
            }}
          />
        </>
      ) : (
        <></>
      )}
      <input
        ref={fileRef}
        hidden
        max={3}
        accept=".jpg, .jpeg, .gif, .png, .bmp"
        type="file"
        onChange={(e) => onChange(e, type)}
      />
    </Container>
  );
};

export default ImageSetting;

const Container = styled.div`
  .wrapper {
    position: relative;
    display: inline-block;
  }
  .hoverItem {
    display: none;
    cursor: pointer;
  }
  .wrapper:hover {
    .hoverItem {
      display: block;
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }

  .gray_zone {
    width: 315px;
    padding: 6px 8px;
    background: ${COLORS.grayScale.gray4};
    font-size: 10px;
    line-height: 18px;
    margin: 4px 0px;
  }
`;
