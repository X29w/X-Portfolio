import type { FC, PropsWithChildren } from "react";
import "./globals.css";
import { siteConfig } from "@/constant/config";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils/classNames";
import { Navbar } from "@/components/config/navbar";
import { Footer } from "@/components/config/footer";
import { StarsCanvas } from "@/components/config/star-background";

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body
      className={cn(
        "bg-[#030014] overflow-y-scroll overflow-x-hidden",
        inter.className
      )}
    >
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
