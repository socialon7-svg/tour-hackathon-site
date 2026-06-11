import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://tour-hackathon-site.vercel.app";

// Metadata controls the browser tab title and social preview basics.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "APBL 2026 | 대구 관광 빅데이터 해커톤",
  description: "총 시상금 710만원, 최종 10개 팀 선발. 대구 관광 데이터를 활용한 지역혁신 해커톤에 참가하세요.",
  keywords: ["APBL", "해커톤", "대구 관광", "빅데이터", "경북대학교", "지역혁신", "대학생 공모전"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "APBL 2026 | 대구 관광 빅데이터 해커톤",
    description: "총 시상금 710만원 · 전문가 멘토링 · 최종 10개 팀 선발",
    url: siteUrl,
    siteName: "APBL 2026",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "APBL 2026 대구 관광 빅데이터 해커톤 참가자 모집",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APBL 2026 | 대구 관광 빅데이터 해커톤",
    description: "총 시상금 710만원 · 전문가 멘토링 · 최종 10개 팀 선발",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "color-scheme": "only light",
    "supported-color-schemes": "light",
  },
};

// Keep mobile browsers from applying automatic dark-mode recoloring.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

// RootLayout wraps every page in the app. This project has one landing page.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
