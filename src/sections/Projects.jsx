import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers3,
  X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
  useEffect,
  useState,
} from "react";

import { Reveal } from "../components/Reveal";


/* ==========================================================
   PROJECT DATA
   ========================================================== */

const projects = [
  {
    title: "Aura-Mosaic Store",

    type: "Full-Stack E-Commerce",

    category: "E-Commerce",

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

    caseStudy: {
      problem:
        "Modern online stores need more than basic product listings. The goal was to create a richer shopping experience with authentication, personalized interactions, shopping cart management and intelligent discovery features.",

      solution:
        "Aura-Mosaic was developed as a full-stack e-commerce system that combines a modern React interface with backend services for authenticated shopping, product management and intelligent product interactions.",

      architecture:
        "The application separates the frontend presentation layer from backend business logic and data management, allowing the shopping experience and server-side functionality to evolve independently.",

      features: [
        "Authenticated user experience",
        "Shopping cart management",
        "Wishlist functionality",
        "Product search and filtering",
        "Product recommendations",
        "Responsive storefront interface",
      ],

      outcome:
        "The project demonstrates a complete end-to-end e-commerce workflow while exploring modern frontend design, backend architecture and AI-assisted shopping experiences.",
    },
  },


  {
    title: "Budget Bee",

    type: "Personal Finance Manager",

    category: "Finance",

    description:
      "A full-stack personal finance application designed to help users track income and expenses, manage monthly spending limits, maintain financial records and understand their money through a clean authenticated dashboard.",

    images: [
      "/optimized/budget-bee-dashboard.webp",
      "/optimized/budget-bee-auth.webp",
    ],

    tags: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Render",
    ],

    github:
      "https://github.com/Fardin1023/BedgetBee",

    live:
      "https://bedget-bee.vercel.app/",

    caseStudy: {
      problem:
        "Managing everyday income, expenses and monthly limits becomes difficult when financial information is scattered across different tools or tracked manually.",

      solution:
        "Budget Bee centralizes personal finance management into a single authenticated application where users can record transactions, track spending, control monthly limits and review financial activity through a structured dashboard.",

      architecture:
        "The project uses a React and TypeScript frontend connected to an Express.js backend and MongoDB database. The frontend is deployed on Vercel while the backend is hosted on Render.",

      features: [
        "Income and expense management",
        "Monthly spending limits",
        "Financial analytics dashboard",
        "Transaction CRUD operations",
        "Authentication",
        "Downloadable PDF reports",
      ],

      outcome:
        "A deployed end-to-end finance product with a Vercel frontend and Render backend, designed around practical day-to-day money tracking.",
    },
  },


  {
    title: "Cohiva",

    type: "Real-Time Meeting & Classroom Platform",

    category: "Real-Time Collaboration",

    description:
      "A full-stack real-time meeting and virtual classroom platform built without third-party video conferencing services, featuring custom WebRTC communication, host controls, synchronized collaboration tools and secure meeting management.",

    images: [
      "/optimized/cohiva-dashboard.webp",
      "/optimized/cohiva-new-meeting.webp",
      "/optimized/cohiva-classroom.webp",
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "WebRTC",
      "mediasoup",
      "MongoDB",
      "Docker",
      "Vercel",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "WebRTC",
      "mediasoup",
      "WebSockets",
      "Excalidraw",
      "Vercel Blob",
      "Nodemailer",
      "Resend SMTP",
      "Coturn",
      "Docker",
      "Docker Compose",
      "Vercel",
    ],

    github: null,

    live: null,

    caseStudy: {
      problem:
        "Most online meeting products depend on external conferencing providers, limiting control over authentication, meeting permissions, media infrastructure and classroom-specific collaboration. Cohiva was built to provide those capabilities through a custom full-stack architecture.",

      solution:
        "Cohiva combines secure custom authentication with live audio/video, screen sharing, realtime chat and reactions, a synchronized Excalidraw whiteboard, waiting-room controls, attendance tracking, password recovery, host-only recording and complete meeting lifecycle management.",

      architecture:
        "The web application uses Next.js and React with MongoDB for persistent data and custom session-based authentication. Realtime media runs through a separate Node.js WebRTC/mediasoup RTC architecture with WebSocket signaling and Coturn TURN/STUN support. The web application is deployed on Vercel, while private recordings are stored in Vercel Blob and RTC services run separately through Docker-based infrastructure.",

      features: [
        "Custom sign-up, sign-in, logout, profile editing and password reset",
        "Live camera, microphone and screen sharing",
        "Custom mediasoup-based realtime participant communication",
        "Host-controlled waiting room and meeting access permissions",
        "Realtime chat, reactions and raise-hand functionality",
        "Teacher-controlled synchronized Excalidraw whiteboard",
        "Late-join whiteboard state synchronization",
        "Host-only meeting recording with private playback, download and deletion",
        "Attendance tracking with join/leave times, duration and CSV export",
        "Participant limits, meeting access modes and lifecycle controls",
        "End-for-everyone controls and server-side authorization for host-only actions",
        "Production deployment with separate web, RTC, TURN and recording-storage layers",
      ],

      outcome:
        "Cohiva demonstrates an end-to-end production architecture for realtime collaboration built from the ground up, covering secure application logic, custom media transport, synchronized classroom tools, host governance, persistent data and deployment infrastructure without relying on a third-party video conferencing service.",
    },
  },
];


/* ==========================================================
   PROJECT MEDIA
   ========================================================== */

const ProjectMedia = ({
  project,
}) => {
  const hasSecondaryImage =
    project.images.length > 1;

  return (
    <div className="project-media">

      <div className="project-main-image">
        <img
          src={project.images[0]}
          alt={`${project.title} interface`}
          loading="lazy"
          decoding="async"
        />
      </div>


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


      <div
        className="project-media-gradient"
        aria-hidden="true"
      />

    </div>
  );
};


/* ==========================================================
   CASE STUDY MODAL
   ========================================================== */

const ProjectCaseStudy = ({
  project,
  onClose,
  isOpen,
}) => {
  const [
    activeImage,
    setActiveImage,
  ] = useState(0);


  /* ========================================================
     LOCK SCROLL + ESC CLOSE
     ======================================================== */

  useEffect(() => {
    const handleKeyDown = (
      event
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        onClose();
      }
    };


    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.style.overflow =
        previousOverflow;


      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);


  /* ========================================================
     IMAGE NAVIGATION
     ======================================================== */

  const previousImage = () => {
    setActiveImage(
      (
        current
      ) =>
        current === 0
          ? project.images.length -
            1
          : current - 1
    );
  };


  const nextImage = () => {
    setActiveImage(
      (
        current
      ) =>
        current ===
        project.images.length -
          1
          ? 0
          : current + 1
    );
  };


  return (
    <div
      className={`
        project-case-overlay

        ${
          isOpen
            ? "project-case-overlay--open"
            : ""
        }
      `}
      onMouseDown={(
        event
      ) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <div
        className={`
          project-case-modal

          ${
            isOpen
              ? "project-case-modal--open"
              : ""
          }
        `}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
      >

        {/* ==================================================
            MODAL HEADER
            ================================================== */}

        <div className="project-case-header">

          <div>
            <span className="project-case-kicker">
              Project Case Study
            </span>

            <h2>
              {project.title}
            </h2>
          </div>


          <button
            type="button"
            className="project-case-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            <X size={20} />
          </button>

        </div>


        {/* ==================================================
            BODY
            ================================================== */}

        <div className="project-case-body">

          {/* ================================================
              LEFT — SCREENSHOT GALLERY
              ================================================ */}

          <div className="project-case-gallery">

            <div className="project-case-main-image">

              <img
                src={
                  project.images[
                    activeImage
                  ]
                }
                alt={`${project.title} screenshot ${
                  activeImage + 1
                }`}
              />


              {project.images.length >
                1 && (
                <>

                  <button
                    type="button"
                    className="
                      project-case-arrow
                      project-case-arrow--left
                    "
                    onClick={
                      previousImage
                    }
                    aria-label="Previous image"
                  >
                    <ChevronLeft
                      size={19}
                    />
                  </button>


                  <button
                    type="button"
                    className="
                      project-case-arrow
                      project-case-arrow--right
                    "
                    onClick={
                      nextImage
                    }
                    aria-label="Next image"
                  >
                    <ChevronRight
                      size={19}
                    />
                  </button>

                </>
              )}

            </div>


            {/* THUMBNAILS */}

            {project.images.length >
              1 && (
              <div className="project-case-thumbnails">

                {project.images.map(
                  (
                    image,
                    index
                  ) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      className={`
                        project-case-thumbnail

                        ${
                          activeImage ===
                          index
                            ? "project-case-thumbnail--active"
                            : ""
                        }
                      `}
                      onClick={() =>
                        setActiveImage(
                          index
                        )
                      }
                      aria-label={`Show screenshot ${
                        index + 1
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                      />
                    </button>
                  )
                )}

              </div>
            )}

          </div>


          {/* ================================================
              RIGHT — CASE STUDY DETAILS
              ================================================ */}

          <div className="project-case-content">

            <div className="project-case-type">
              <Layers3
                size={15}
              />

              {project.type}
            </div>


            {/* PROBLEM */}

            <div className="project-case-section">

              <span>
                Problem
              </span>

              <p>
                {
                  project.caseStudy
                    .problem
                }
              </p>

            </div>


            {/* SOLUTION */}

            <div className="project-case-section">

              <span>
                Solution
              </span>

              <p>
                {
                  project.caseStudy
                    .solution
                }
              </p>

            </div>


            {/* ARCHITECTURE */}

            <div className="project-case-section">

              <span>
                Architecture
              </span>

              <p>
                {
                  project.caseStudy
                    .architecture
                }
              </p>

            </div>


            {/* FEATURES */}

            <div className="project-case-section">

              <span>
                Key Features
              </span>


              <div className="project-case-features">

                {project.caseStudy.features.map(
                  (
                    feature
                  ) => (
                    <div
                      key={
                        feature
                      }
                    >
                      <i />

                      {
                        feature
                      }
                    </div>
                  )
                )}

              </div>

            </div>


            {/* OUTCOME */}

            <div className="project-case-section">

              <span>
                Outcome
              </span>

              <p>
                {
                  project.caseStudy
                    .outcome
                }
              </p>

            </div>


            {/* TECHNOLOGIES */}

            <div className="project-case-tech">

              {(project.technologies ?? project.tags).map(
                (tag) => (
                  <span
                    key={tag}
                  >
                    {tag}
                  </span>
                )
              )}

            </div>


            {/* LINKS */}

            {(project.live ||
              project.github) && (
              <div className="project-case-actions">

                {project.live && (
                  <a
                    href={
                      project.live
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="project-primary-link"
                  >
                    <ExternalLink
                      size={17}
                    />

                    Live Demo

                    <ArrowUpRight
                      size={15}
                    />
                  </a>
                )}


                {project.github && (
                  <a
                    href={
                      project.github
                    }
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

        </div>

      </div>

    </div>
  );
};


/* ==========================================================
   PROJECTS SECTION
   ========================================================== */

export const Projects = () => {
  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);

  const [
    isCaseStudyOpen,
    setIsCaseStudyOpen,
  ] = useState(false);


  /* ========================================================
     OPEN MODAL WITH TRANSITION
     ======================================================== */

  const openCaseStudy = (
    project
  ) => {
    setSelectedProject(
      project
    );


    /*
     * Two animation frames allow
     * the hidden state to render
     * before adding the open class.
     */
    requestAnimationFrame(
      () => {
        requestAnimationFrame(
          () => {
            setIsCaseStudyOpen(
              true
            );
          }
        );
      }
    );
  };


  /* ========================================================
     CLOSE MODAL WITH TRANSITION
     ======================================================== */

  const closeCaseStudy = () => {
    setIsCaseStudyOpen(
      false
    );


    /*
     * Match this timeout
     * with the CSS closing animation.
     */
    window.setTimeout(
      () => {
        setSelectedProject(
          null
        );
      },
      320
    );
  };


  return (
    <>
      <section
        id="projects"
        className="section-shell cv-auto"
      >
        <div className="site-container">

          {/* ==================================================
              HEADING
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
                  A growing collection of
                  projects where I explore
                  software engineering,
                  full-stack development and
                  practical problem solving.
                </p>

              </div>

            </div>
          </Reveal>


          {/* ==================================================
              PROJECT LIST
              ================================================== */}

          <div className="projects-list">

            {projects.map(
              (
                project,
                index
              ) => {

                const reverse =
                  index % 2 !== 0;


                const projectNumber =
                  String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  );


                return (
                  <Reveal
                    key={
                      project.title
                    }
                    delay={
                      80 +
                      index * 70
                    }
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
                          MEDIA
                          ====================================== */}

                      <div className="project-showcase-media">

                        <ProjectMedia
                          project={
                            project
                          }
                        />

                      </div>


                      {/* ======================================
                          CONTENT
                          ====================================== */}

                      <div className="project-showcase-content">

                        <div className="project-meta-row">

                          <span className="project-number">
                            {
                              projectNumber
                            }
                          </span>


                          <span className="project-type">

                            <Layers3
                              size={
                                14
                              }
                            />

                            {
                              project.type
                            }

                          </span>

                        </div>


                        <h3 className="project-title">
                          {
                            project.title
                          }
                        </h3>


                        <p className="project-description">
                          {
                            project.description
                          }
                        </p>


                        <div className="project-tags">

                          {project.tags.map(
                            (
                              tag
                            ) => (
                              <span
                                key={
                                  tag
                                }
                                className="tech-pill"
                              >
                                {
                                  tag
                                }
                              </span>
                            )
                          )}

                        </div>


                        {/* ====================================
                            ACTIONS
                            ==================================== */}

                        <div className="project-actions">

                          <button
                            type="button"
                            className="project-case-button"
                            onClick={() =>
                              openCaseStudy(
                                project
                              )
                            }
                          >
                            Case Study

                            <ArrowUpRight
                              size={
                                16
                              }
                            />
                          </button>


                          {project.live && (
                            <a
                              href={
                                project.live
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="project-primary-link"
                            >
                              <ExternalLink
                                size={
                                  17
                                }
                              />

                              Live Demo
                            </a>
                          )}


                          {project.github && (
                            <a
                              href={
                                project.github
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="project-secondary-link"
                            >
                              <FaGithub
                                size={
                                  17
                                }
                              />

                              Source Code
                            </a>
                          )}

                        </div>

                      </div>

                    </article>

                  </Reveal>
                );
              }
            )}

          </div>


          {/* ==================================================
              PROJECTS FOOTER
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
              <FaGithub
                size={17}
              />

              Explore my GitHub

              <ArrowUpRight
                size={16}
              />
            </a>

          </Reveal>

        </div>
      </section>


      {/* ======================================================
          CASE STUDY MODAL
          ====================================================== */}

      {selectedProject && (
        <ProjectCaseStudy
          key={selectedProject.title}
          project={
            selectedProject
          }
          onClose={
            closeCaseStudy
          }
          isOpen={
            isCaseStudyOpen
          }
        />
      )}

    </>
  );
};