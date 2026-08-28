import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Reveal } from "../components/Reveal";


/* ==========================================================
   PROJECT DATA

   To add a new project later:
   - add another object to this array
   - add its image inside public/optimized/
   - numbering and alternating layout happen automatically
   ========================================================== */

const projects = [
  {
    title: "Aura-Mosaic Store",

    type: "Full-Stack E-Commerce",

    description:
      "A modern e-commerce platform focused on product discovery, authenticated shopping experiences, cart and wishlist flows, search and filtering, and intelligent product interactions.",

    images: [
      "/optimized/aura-mosaic.webp",
    ],

    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "AI Integration",
    ],

    github: null,

    live: null,
  },

  {
    title: "Budget Bee",

    type: "Personal Finance Manager",

    description:
      "A full-stack personal finance application designed to help users track income and expenses, manage monthly spending limits, maintain financial records and understand their money through a clean authenticated dashboard.",

    images: [
      "/optimized/budget-bee-dashboard.webp",
      "/optimized/budget-bee-auth.webp",
    ],

    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Clerk",
      "Vercel",
    ],

    github:
      "https://github.com/Fardin1023/BedgetBee",

    live:
      "https://bedget-bee.vercel.app/",
  },
];


/* ==========================================================
   PROJECT MEDIA
   ========================================================== */

const ProjectMedia = ({ project }) => {
  const hasSecondaryImage =
    project.images.length > 1;

  return (
    <div className="project-media">

      {/* MAIN IMAGE */}
      <div className="project-main-image">
        <img
          src={project.images[0]}
          alt={`${project.title} interface`}
          loading="lazy"
          decoding="async"
        />
      </div>


      {/* SECONDARY IMAGE */}
      {hasSecondaryImage && (
        <div className="project-secondary-image">
          <img
            src={project.images[1]}
            alt={`${project.title} secondary interface`}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}


      {/* BACKGROUND GLOW */}
      <div
        className="project-media-gradient"
        aria-hidden="true"
      />

    </div>
  );
};


/* ==========================================================
   PROJECTS SECTION
   ========================================================== */

export const Projects = () => {
  return (
    <section
      id="projects"
      className="section-shell cv-auto"
    >
      <div className="site-container">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <Reveal>
          <div className="projects-heading">

            <span className="section-kicker">
              Featured Work
            </span>


            <div className="projects-heading-row">

              <h2 className="section-title mt-4">
                Projects built with

                <span className="block font-serif font-normal italic text-cyan-300">
                  purpose and curiosity.
                </span>
              </h2>


              <p className="section-copy projects-intro">
                A growing collection of projects where I
                explore software engineering, full-stack
                development and practical problem solving.
              </p>

            </div>

          </div>
        </Reveal>


        {/* ==================================================
            PROJECT LIST
        ================================================== */}

        <div className="projects-list">

          {projects.map(
            (project, index) => {

              const reverse =
                index % 2 !== 0;


              const projectNumber =
                String(index + 1).padStart(
                  2,
                  "0"
                );


              return (
                <Reveal
                  key={project.title}
                  delay={80 + index * 70}
                >
                  <article
                    className={`
                      project-showcase

                      ${
                        reverse
                          ? "project-showcase--reverse"
                          : ""
                      }
                    `}
                  >

                    {/* ======================================
                        PROJECT IMAGE
                    ====================================== */}

                    <div className="project-showcase-media">

                      <ProjectMedia
                        project={project}
                      />

                    </div>


                    {/* ======================================
                        PROJECT INFORMATION
                    ====================================== */}

                    <div className="project-showcase-content">

                      {/* META */}

                      <div className="project-meta-row">

                        <span className="project-number">
                          {projectNumber}
                        </span>


                        <span className="project-type">

                          <Layers3 size={14} />

                          {project.type}

                        </span>

                      </div>


                      {/* TITLE */}

                      <h3 className="project-title">
                        {project.title}
                      </h3>


                      {/* DESCRIPTION */}

                      <p className="project-description">
                        {project.description}
                      </p>


                      {/* TECHNOLOGIES */}

                      <div className="project-tags">

                        {project.tags.map(
                          (tag) => (
                            <span
                              key={tag}
                              className="tech-pill"
                            >
                              {tag}
                            </span>
                          )
                        )}

                      </div>


                      {/* ====================================
                          PROJECT LINKS
                      ==================================== */}

                      {(project.live ||
                        project.github) && (

                        <div className="project-actions">

                          {/* LIVE DEMO */}

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="project-primary-link"
                            >

                              <ExternalLink
                                size={17}
                              />

                              Live Demo

                              <ArrowUpRight
                                size={16}
                              />

                            </a>
                          )}


                          {/* GITHUB */}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="project-secondary-link"
                            >

                              <FaGithub
                                size={17}
                              />

                              Source Code

                            </a>
                          )}

                        </div>
                      )}

                    </div>

                  </article>
                </Reveal>
              );
            }
          )}

        </div>


        {/* ==================================================
            PROJECT SECTION FOOTER
        ================================================== */}

        <Reveal className="projects-footer">

          <p>
            More projects are always
            in progress.
          </p>


          <a
            href="https://github.com/Fardin1023"
            target="_blank"
            rel="noreferrer"
          >

            <FaGithub size={17} />

            Explore my GitHub

            <ArrowUpRight size={16} />

          </a>

        </Reveal>

      </div>
    </section>
  );
};