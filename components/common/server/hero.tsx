import { FC } from "react";
import { HeroContent } from "../client/hero-content";

export const Hero: FC<unknown> = () => (
  <div className="relative flex flex-col h-full w-full">
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>

    <HeroContent />
  </div>
);
