
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <section id="home">
        <Hero scrollToSection={scrollToSection} />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

      <Toaster />
    </div>
  );
};

export default Index;
