import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

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

      {/* Smooth visual separator */}
      <div className="section-fade-separator" />

      <About />

      <div className="section-fade-separator" />

      <TechStack data={stack} />

      <div className="section-fade-separator" />

      <Experience data={experience} />

      <div className="section-fade-separator" />

      <Projects data={projects} />

      <div className="section-fade-separator" />

      <Education data={education} />

      <div className="section-fade-separator" />

      <Resume />

      <div className="section-fade-separator" />

      <Contact />
    </main>
  );
}
