import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
  // GitHub Pages 静态导出配置
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 图片优化
  },
  // GitHub Pages 需要 basePath（仓库名）
  basePath: isGitHubPages ? "/maverick-ai-lab" : "",
  assetPrefix: isGitHubPages ? "/maverick-ai-lab/" : "",
  trailingSlash: true,
};

export default withPWA(nextConfig);
