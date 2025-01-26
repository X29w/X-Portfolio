import { Hero } from "@/components/common/server/hero";
import Projects from "@/components/common/server/projects";
import Skills from "@/components/common/server/skills";
import type { FC } from "react";

const Home: FC<unknown> = () => (
  <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero />
      <Skills />
      <Projects />
    </div>
  </main>
);

export default Home;
