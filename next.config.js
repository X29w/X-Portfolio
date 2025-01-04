/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = "X-Portfolio";

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

// 打印 assetPrefix 和 basePath
console.log("Asset Prefix:", assetPrefix);
console.log("Base Path:", basePath);

const nextConfig = {
  assetPrefix,
  basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
