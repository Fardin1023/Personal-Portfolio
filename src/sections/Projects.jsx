import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Aura-Mosaic Store",
    description:
      "Aura-Mosaic is a sophisticated, comprehensive e-commerce platform that seamlessly bridges an intuitive user interface with a robust backend architecture to deliver a dynamic storefront. Gated exclusively for authenticated users, the system meticulously manages active shopping carts, personalized wishlists, historical acquisitions, and a granular search-and-filter engine. Elevating the consumer experience, it incorporates an advanced cryptographic session framework alongside an intelligent conversational agent capable of rendering tailored product recommendations, curated gift ensembles, and side-by-side product comparisons.",
    image: "/project/ui.png",
    tags: ["React", "TailwindCSS", "NodeJS"],
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 bg-blue-700 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-blue-400">
            Projects that
            <span> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Some of my recent works, complex web applications that is very much
            able to solve real world problems with better solutions and
            suggestions as well.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100} ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-blue-500 hover:text-black transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 group-hover:text-shadow-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-shadow-amber-100 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sx font-medium border border-border/50 text-white hover:border-blue-600 hover:text-blue-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
