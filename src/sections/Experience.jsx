import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "../components/Reveal";

const experiences = [
  {
    period: "2025 — 2026",
    role: "IT Operator",
    company: "Synergy Business Solutions",
    description: "Worked with IP routing and addressing in day-to-day IT operations.",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-shell cv-auto">
      <div className="site-container">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="section-kicker">Career journey</span>
            <h2 className="section-title mt-4">
              Experience that
              <span className="block font-serif font-normal italic text-cyan-300">
                keeps moving forward.
              </span>
            </h2>
            <p className="section-copy mt-5 max-w-lg">
              Practical experience that continues to shape how I approach systems,
              troubleshooting, communication and technical problem solving.
            </p>
          </Reveal>

          <div className="relative pl-7 sm:pl-10">
            <div className="absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-blue-400 via-cyan-400/60 to-transparent sm:left-[9px]" />
            {experiences.map((experience, index) => (
              <Reveal key={`${experience.role}-${experience.period}`} delay={100 + index * 80}>
                <article className="timeline-card relative">
                  <span className="absolute -left-[31px] top-8 grid h-3 w-3 place-items-center rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,.08),0_0_22px_rgba(34,211,238,.5)] sm:-left-[43px]" />
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-cyan-300">{experience.period}</span>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h3>
                      <p className="mt-1 text-slate-400">{experience.company}</p>
                    </div>
                    <div className="feature-icon !mb-0 !h-11 !w-11">
                      <BriefcaseBusiness size={19} />
                    </div>
                  </div>
                  <p className="mt-6 border-t border-white/[0.07] pt-5 text-sm leading-6 text-slate-400">
                    {experience.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
