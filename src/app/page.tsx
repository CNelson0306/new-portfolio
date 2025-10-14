import React from "react";
import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
