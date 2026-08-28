import { Navbar } from "@/layout/Navbar";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certificates } from "@/sections/Certificates";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">

      <Navbar />

      <main>
        <Hero />

        <About />

        <Education />

        <Projects />

        <Experience />

        <Certificates />

        <Contact />
      </main>

    </div>
  );
}

export default App;