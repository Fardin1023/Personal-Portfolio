import { ArrowUpRight, Code2, Layers3 } from "lucide-react";
import { Reveal } from "../components/Reveal";

const projects = [
  {
    title: "Aura-Mosaic Store",
    type: "Full-stack e-commerce platform",
    description:
      "An authenticated e-commerce experience with cart and wishlist flows, granular search and filtering, product discovery, cryptographic session concepts and an intelligent conversational layer for recommendations and comparisons.",
    image: "/optimized/aura-mosaic.webp",
    tags: ["React", "Tailwind CSS", "Node.js", "AI Integration"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-shell cv-auto">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Featured work</span>
          <h2 className="section-title mt-4">
            Projects built to solve
            <span className="text-gradient"> real problems.</span>
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            A selection of products where I focus on usable interfaces, strong
            engineering foundations and thoughtful technical details.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={100 + index * 80}>
              <article className="project-card group grid overflow-hidden lg:grid-cols-[1.08fr_.92fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-[#0a0f1b] sm:min-h-[360px]">
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                    decoding="async"
                    width="1400"
                    height="693"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/50 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-md">
                    Featured project
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-blue-300">
                      <Layers3 size={15} /> {project.type}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                      <span className="flex items-center gap-2 text-sm text-slate-500">
                        <Code2 size={16} /> Case study
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-blue-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        Explore <ArrowUpRight size={17} />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
