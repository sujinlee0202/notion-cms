import "./globals.css";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import "react-notion-x/src/styles.css";
import GlobalStyleProvider from "@/components/GlobalStyleProvider";
import StyledComponentsRegistry from "@/components/styled-registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NaverMapProvider from "@/components/NaverMapProvider";

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
