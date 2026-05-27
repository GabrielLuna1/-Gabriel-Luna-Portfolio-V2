import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";

// Data
import { profile } from "@/data/profile";
import { stack } from "@/data/stack";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";

export default function Home() {
  return (
    <main>
      <Hero data={profile} />

      <Reveal delay={0.1}>
        <About />
      </Reveal>

      {/* Depth separator */}
      <div className="section-depth-overlay" />

      <Reveal delay={0.1}>
        <TechStack data={stack} />
      </Reveal>

      <div className="section-depth-overlay" />

      <Reveal delay={0.1}>
        <Experience data={experience} />
      </Reveal>

      <div className="section-depth-overlay" />

      <Reveal delay={0.1}>
        <Projects data={projects} />
      </Reveal>

      <div className="section-depth-overlay" />

      <Reveal delay={0.1}>
        <Education data={education} />
      </Reveal>

      <Reveal delay={0.1}>
        <Contact />
      </Reveal>
    </main>
  );
}
