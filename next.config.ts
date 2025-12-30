import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
  images: {
    unoptimized: true,
  },
  // 只有 GitHub Pages 需要静态导出和 basePath
  ...(isGitHubPages && {
    output: "export",
    basePath: "/maverick-ai-lab",
    assetPrefix: "/maverick-ai-lab/",
  }),
  trailingSlash: true,
};

export default withPWA(nextConfig);
