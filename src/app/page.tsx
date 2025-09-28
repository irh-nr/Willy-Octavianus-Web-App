import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Expertise from "@/components/section/Expertise";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
