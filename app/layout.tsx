import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maverick AI Lab | AI & Agent 智能体实验室",
  description: "专注于青少年 AI 素养与 Agent 智能体架构教学。培养能够驾驭人工智能的下一代数字原住民，通过 PBL 项目式学习构建属于自己的 AI 作品。",
  keywords: "AI 实验室, Agent 智能体, 大语言模型, 提示词工程, 青少年 AI 教育, 深度学习, 逻辑思维",
  manifest: "/manifest.json",
  themeColor: "#6366f1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AI Lab",
  },
  openGraph: {
    title: "Maverick AI Lab | AI & Agent 智能体实验室",
    description: "用 AI 驱动孩子的无限可能 - 专业智能体架构教学",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-gray-100`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
