import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
  // Vercel 上使用优化后的图片处理；GitHub Pages 需要关闭优化
  images: {
    unoptimized: isGitHubPages,
  },
  // 只有 GitHub Pages 需要静态导出和 basePath
  ...(isGitHubPages && {
    output: "export",
    basePath: "/maverick-ai-lab",
    assetPrefix: "/maverick-ai-lab/",
  }),
};

// PWA 配置 - 仅在非 Vercel 环境使用（避免兼容性问题）
let exportConfig = nextConfig;

if (!isVercel) {
  try {
    const withPWA = require("next-pwa")({
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    });
    exportConfig = withPWA(nextConfig);
  } catch {
    // PWA 模块不可用时使用基础配置
    exportConfig = nextConfig;
  }
}

export default exportConfig;
