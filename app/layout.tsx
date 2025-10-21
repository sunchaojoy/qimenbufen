import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "奇门遁甲基础知识学习平台",
  description: "探索中华传统智慧，学习奇门遁甲基础知识。提供系统性学习路径、互动式九宫格、排盘演示和知识测验等功能。",
  keywords: "奇门遁甲, 中华传统文化, 易经八卦, 预测学, 九宫格, 排盘, 阴阳五行",
  authors: [{ name: "奇门遁甲学习平台" }],
  openGraph: {
    title: "奇门遁甲基础知识学习平台",
    description: "探索中华传统智慧，学习奇门遁甲基础知识",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#d97706" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
