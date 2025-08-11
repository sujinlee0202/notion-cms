"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Carousel, Flex } from "antd";
import { ExtendedRecordMap } from "notion-types";

type Props = {
  recordMap: ExtendedRecordMap;
};

// Dynamic imports for Notion components with error handling
const NotionRenderer = dynamic(() => import("react-notion-x").then((m) => m.NotionRenderer), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Code = dynamic(() => import("react-notion-x/build/third-party/code").then((m) => m.Code), {
  ssr: false,
});
const Collection = dynamic(() => import("react-notion-x/build/third-party/collection").then((m) => m.Collection), {
  ssr: false,
});
const Equation = dynamic(() => import("react-notion-x/build/third-party/equation").then((m) => m.Equation), {
  ssr: false,
});
const NotionModal = dynamic(() => import("react-notion-x/build/third-party/modal").then((m) => m.Modal), {
  ssr: false,
});

// Notion 이미지 URL을 올바른 형식으로 변환하는 함수 (캐러샐 용)
function processNotionImageUrl(imageUrl: string, blockId: string): string {
  // 이미 완전한 URL인 경우
  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }

  // Notion 이미지 URL 처리
  if (imageUrl.startsWith("/")) {
    return `https://www.notion.so${imageUrl}?table=block&id=${blockId}&cache=v2`;
  } else {
    return `https://www.notion.so/image/${encodeURIComponent(imageUrl)}?table=block&id=${blockId}&cache=v2`;
  }
}

export default function NotionPopup({ recordMap }: Props) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (recordMap) {
      // recordMap에서 이미지 URL들을 추출
      const extractedImages: string[] = [];

      // recordMap의 모든 블록을 순회하면서 이미지 찾기
      Object.values(recordMap.block).forEach((block: any) => {
        if (block.value && block.value.type === "image") {
          let imageUrl = null;

          if (block.value.properties?.source?.[0]?.[0]) {
            imageUrl = block.value.properties.source[0][0];
          }

          if (imageUrl) {
            const processedUrl = processNotionImageUrl(imageUrl, block.value.id);
            extractedImages.push(processedUrl);
          }
        }
      });

      setImages(extractedImages);
    }
  }, [recordMap]);

  // 이미지가 여러 개인 경우 캐러셀로 렌더링
  if (images.length > 1) {
    return (
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Carousel arrows={true} autoplay pauseOnFocus={false} pauseOnHover={false} style={{ height: "100%" }}>
          {images.map((imageUrl, index) => (
            <div key={index} style={{ width: "100%", height: "100%" }}>
              <img
                src={imageUrl}
                alt={`Notion Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
  // 이미지가 1개인 경우 단일 이미지로 렌더링
  else if (images.length === 1) {
    return (
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Flex style={{ width: "100%", height: "100%" }}>
          <img
            src={images[0]}
            alt="Notion Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Flex>
      </div>
    );
  }

  // 이미지가 없는 경우 기본 NotionRenderer 사용
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      disableHeader={true}
      pageTitle={false}
      components={{
        Code,
        Collection,
        Equation,
      }}
    />
  );
}
