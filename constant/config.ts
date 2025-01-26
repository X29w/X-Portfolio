import { Metadata } from "next";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nest.js",
    image: "nest.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI合同云管家",
    description:
      "基于Electron、Nest、SQLite、Vite、React、tailwind css实现多类型文件的在线和硬件存储,利用前端数据库存储和异步队列进行不同账号的上传和下载管理、以及AI在线分析指定文件提取出文件摘要并给予在线修改、下载等功能。根据不同角色赋予不同操作权限。接入NAS实现文件的远程存储。文件的本地下载和NAS文件的备份。",
    image: "/projects/project-1.png",
  },
  {
    title: "Wander Trip",
    description:
      "基于Expo、React Native、Expo-Sqlite、React实现一个对外游客访华的旅游app。支持多种收拾操作、本地优先策略的前端缓存数据库。实现拍照、地理位置获取、音乐播放的暂停开始、队列的切换、以及地图的展示。",
    image: "/projects/project-2.png",
  },
  {
    title: "AI SEO智能优化",
    description:
      "基于React、tailwind css实现一个AI智能优化网站的SEO。利用对Google SEO的优化以及爬取规则和Gemini,根据用户输入的title 和 description 以及keyword进行优化。AI根据得到的输入结果得到一篇SEO优化后的文章。",
    image: "/projects/project-3.png",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/X29w",
};

export const siteConfig: Metadata = {
  title: "X-Portfolio",
  description: "Welcome to my portfolio.",
  keywords: [
    "reactjs",
    "nextjs",
    "react",
    "portfolio",
    "3d-portfolio",
    "3d-website",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "x29",
    url: "https://github.com/X29w",
  },
} as const;
