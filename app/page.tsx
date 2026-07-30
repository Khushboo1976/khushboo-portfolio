import About from "@/components/about/About";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Philosophy from "@/components/philosophy/Philosophy";
import Projects from "@/components/projects";
import { RecognitionSection } from "@/components/recognition";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <RecognitionSection />
      </main>

      <Footer />
    </>
  );
}