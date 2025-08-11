"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function NaverMapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.naver?.maps) {
      console.log("naver maps ready");
    }
  }, []);

  return (
    <>
      <Script src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_KEY}`} strategy="afterInteractive" />
      {children}
    </>
  );
}
