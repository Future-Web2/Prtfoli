import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Methodology } from "./components/Methodology";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg)" }}>
      <Background />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Methodology />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Research />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
