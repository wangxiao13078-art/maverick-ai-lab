import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // GitHub Pages 需要静态导出
  ...(isGitHubPages && {
    output: "export",
    basePath: "/maverick-ai-lab",
    assetPrefix: "/maverick-ai-lab/",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
