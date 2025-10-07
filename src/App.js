import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Internship from "./components/Internship";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./components/Portfolio.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Resume />
        <Internship />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
