import {
  BookOpen,
  GraduationCap,
  MapPin,
  School,
} from "lucide-react";

import { Reveal } from "../components/Reveal";

const education = [
  {
    type: "University",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "BRAC University",
    location: "Dhaka",
    period: "2021 — Present",
    icon: GraduationCap,
    featured: true,
  },
  {
    type: "Higher Secondary",
    degree: "Higher Secondary School Certificate",
    institution: "Saint Joseph Higher Secondary School",
    location: "Mohammadpur, Dhaka",
    period: "2017 — 2019",
    icon: School,
    featured: false,
  },
  {
    type: "Secondary",
    degree: "Secondary School Certificate",
    institution: "Ispahani Public School & College",
    location: "Cumilla",
    period: "2017",
    icon: BookOpen,
    featured: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-shell cv-auto">
      <div className="site-container">
        <Reveal>
          <div className="education-heading">
            <span className="section-kicker">Academic Journey</span>

            <h2 className="section-title mt-4">
              Building a strong
              <span className="block font-serif font-normal italic text-cyan-300">
                foundation in technology.
              </span>
            </h2>

            <p className="section-copy mt-5">
              My academic journey has helped shape my foundation in computer science,
              problem solving and technical thinking while giving me the opportunity
              to explore software development and emerging technologies.
            </p>
          </div>
        </Reveal>

        <div className="education-timeline">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={`${item.institution}-${item.period}`} delay={index * 90}>
                <article
                  className={`education-entry ${item.featured ? "education-entry--featured" : ""}`}
                >
                  <div className="education-marker" aria-hidden="true">
                    <span />
                  </div>

                  <div className="education-entry-card">
                    <div className="education-entry-top">
                      <div className="education-entry-icon">
                        <Icon size={21} />
                      </div>

                      <div className="education-entry-meta">
                        <span className="education-type">{item.type}</span>
                        <span className="education-period">{item.period}</span>
                      </div>
                    </div>

                    <div className="education-entry-content">
                      <h3>{item.degree}</h3>
                      <p className="education-school">{item.institution}</p>

                      <div className="education-entry-details">
                        <span>
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
