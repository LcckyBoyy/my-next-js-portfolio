import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative">
      {/*
        Fixed side rails — border-l/r drawn at the same x positions as section
        padding so rails always align with content edges at every viewport width.
      */}
      <div
        aria-hidden="true"
        className="fixed inset-y-0 inset-x-0 -z-10 pointer-events-none px-6 md:px-16 lg:px-24"
      >
        <div className="h-full hidden md:block border-l border-r border-border/30" />
      </div>

      <Hero />
      <SectionDivider number="01" label="About" />
      <About />
      <SectionDivider number="02" label="Skills & Tech" />
      <Skills />
      <SectionDivider number="03" label="Featured Projects" />
      <Projects />
      <SectionDivider number="04" label="Contact" />
      <Contact />
    </main>
  );
}
