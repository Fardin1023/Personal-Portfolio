import { Navbar } from "@/layout/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { CVPreview } from "@/components/CVPreview";
import { AvailabilityStatus } from "@/components/AvailabilityStatus";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Research } from "@/sections/Research";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certificates } from "@/sections/Certificates";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <CVPreview />
      <AvailabilityStatus />

      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
