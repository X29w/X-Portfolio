/** @type {import('next').NextConfig} */

const repo = "X-Portfolio";
let assetPrefix = `/${repo}/`;

let basePath = `/${repo}`;

const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  assetPrefix,
  basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;