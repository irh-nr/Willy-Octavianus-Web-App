import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Expertise from "@/components/section/Expertise";
import Experience from "@/components/section/Experience";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
