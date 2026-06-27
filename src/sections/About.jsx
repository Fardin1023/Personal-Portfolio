import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Experienced in writing clean, maintainable code and leveraging AI-assisted techniques to detect code smells and perform structural refactoring for improved software quality.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working Closely with teams to bring visions to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practises.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-blue-800 text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-blue-500">
              Building The Future,
              <span className="font-times italic font-medium text-white">
                one component at a time.{" "}
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a technically versatile developer and researcher driven by
                a passion for solving complex, multi-layered problems. My
                expertise spans full-stack web development and software
                architecture, with a strong emphasis on leveraging Large
                Language Models (LLMs) for advanced applications like automated
                software refactoring and intelligent document processing.
                Grounded in a solid foundation of data analytics and statistical
                modeling, I enjoy bridging the gap between innovative software
                engineering and rigorous, data-driven research.
              </p>
              <p>
                Beyond code, I bring a deeply curious and interdisciplinary
                mindset to my work. I thrive on breaking down intricate
                systems—whether analyzing technical architectures, dissecting
                complex data patterns, or exploring socio-legal frameworks. This
                combination of analytical grit and sharp attention to detail
                allows me to approach development and research challenges with
                unique insights, delivering high-quality, impactful results.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My professional objective is to coalesce vanguard artificial
                intelligence with robust software architecture, orchestrating
                the development of pragmatic, scalable solutions for intricate
                technical paradigms. Leveraging a rigorous, interdisciplinary
                methodology, I seek to demystify data-dense informational
                ecosystems and manifest innovative systems that deliver profound
                utility."
              </p>
            </div>
          </div>
          {/*Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-400 flex items-center justify-center mb-4 hover:bg-blue-200/70">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
