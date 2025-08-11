"use client";
import { useEffect } from "react";

export default function NaverMapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.naver?.maps) {
      console.log("naver maps ready");
    }
  }, []);

  return <>{children}</>;
}
