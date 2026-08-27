import { BrainCircuit, Code2, Lightbulb, Users } from "lucide-react";
import { Reveal } from "../components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean engineering",
    description:
      "Maintainable code, thoughtful architecture and a strong focus on software quality.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted systems",
    description:
      "Exploring LLM-powered workflows, intelligent document processing and automated refactoring.",
  },
  {
    icon: Users,
    title: "Collaborative work",
    description:
      "Comfortable translating ideas into practical outcomes with teams and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Curious by default",
    description:
      "I enjoy learning across software, data, research and emerging technology domains.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-shell cv-auto">
      <div className="site-container">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="section-kicker">About me</span>
              <h2 className="section-title mt-4">
                Building the future,
                <span className="block font-serif font-normal italic text-slate-300">
                  one thoughtful component at a time.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={90} className="mt-7 space-y-5 text-[15px] leading-7 text-slate-400 md:text-base">
              <p>
                I&apos;m a technically versatile developer and researcher who enjoys
                solving layered problems across full-stack development, software
                architecture, AI-assisted engineering, data analysis and computer
                graphics.
              </p>
              <p>
                I&apos;m especially interested in turning complex systems into clear,
                useful products — whether that means designing cleaner software,
                exploring LLM-based workflows, analysing data or building interactive
                technical experiences.
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-8">
              <div className="quote-card">
                <p className="font-serif text-xl italic leading-8 text-slate-200">
                  “My goal is to combine practical software engineering with AI and
                  research to build systems that are useful, scalable and easier to
                  understand.”
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={80 + index * 70}>
                <article className="feature-card h-full">
                  <div className="feature-icon">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
