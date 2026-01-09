import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About"; // <--- 1. O Import que faltava
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/FadeIn";

// Dados
import { profile } from "@/data/profile";
import { stack } from "@/data/stack";
import { experience } from "@/data/experience"; // Singular (Corrigido)
import { projects } from "@/data/projects";
import { education } from "@/data/education";

export default function Home() {
  return (
    <main>
      <Hero data={profile} />

      {/* 2. A seção Sobre Mim volta aqui */}
      <FadeIn delay={0.2}>
        <About />
      </FadeIn>

      <FadeIn delay={0.2}>
        <TechStack data={stack} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Experience data={experience} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Projects data={projects} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Education data={education} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Contact />
      </FadeIn>
    </main>
  );
}