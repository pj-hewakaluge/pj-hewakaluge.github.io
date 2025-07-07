'use client';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <ScrollToTop />
    </main>
  );
}
