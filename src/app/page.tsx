"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Image {
  name: string;
  path: string;
}

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/images");
      const data: Image[] = await response.json();
      setImages(data);
    }

    fetchImages();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getFileName = (fileName: string) => {
    return `<${fileName
      .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
      .replace(/\.[^/.]+$/, "")
      .replace(/^(.)/, (match, group1) => group1.toUpperCase())}IC />`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        padding: "20px",
      }}
    >
      {[...images].map((image, index) => (
        <div
          key={index}
          style={{
            cursor: "pointer",
            textAlign: "left",
            width: 50,
            height: 50,
            padding: "20px",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.01)",
          }}
          onClick={() => copyToClipboard(getFileName(image.name))}
        >
          <Image src={image.path} alt={image.name} width={50} height={50} />
          <div
            style={{
              whiteSpace: "nowrap",
              fontSize: "1rem",
              textAlign: "left",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            {getFileName(image.name)}
          </div>
        </div>
      ))}
    </div>
  );
}
