import type { Metadata } from "next";
import "./globals.css";

// Metadata controls the browser tab title and social preview basics.
export const metadata: Metadata = {
  title: "APBL 프로젝트 | 빅데이터 기반 지역혁신 프로젝트",
  description: "대구 관광 빅데이터를 활용한 지역혁신 해커톤 모집 랜딩페이지",
};

// RootLayout wraps every page in the app. This project has one landing page.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
