import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import "react-notion-x/src/styles.css";
import GlobalStyleProvider from "@/components/GlobalStyleProvider";
import StyledComponentsRegistry from "@/components/styled-registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NaverMapProvider from "@/components/NaverMapProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOME_URL!),
  title: "LanDup(랜드업)",
  description: "주소입력 한번으로 부동산개발사업 검토 끝!",
  openGraph: {
    title: "LanDup(랜드업)",
    description: "주소입력 한번으로 부동산개발사업 검토 끝!",
    images: [
      {
        url: "/maxresdefault.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LanDup(랜드업)",
    description: "주소입력 한번으로 부동산개발사업 검토 끝!",
    images: ["/maxresdefault.jpg"],
  },
  other: {
    "naver-site-verification": "8184a18594d56a475b21437245735450db1cba72",
    "google-site-verification": "UO-8acpv0hqnt4JBqZjXU7Ugw0XGTHcmkR7aeq7XxMQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyleProvider />
      <html lang="ko">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.lan-dup.com/"></link>
        </head>
        <body>
          <StyledComponentsRegistry>
            <AntdRegistry>
              <ConfigProvider
                theme={{
                  components: { Button: { borderRadius: 4, boxShadow: "none" } },
                }}
              >
                <Suspense>
                  <NaverMapProvider>
                    <ConfigProvider>{children}</ConfigProvider>
                  </NaverMapProvider>
                </Suspense>
              </ConfigProvider>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
