import {
  ArrowRight,
  ChevronDown,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Reveal } from "../components/Reveal";

const skills = [
  "React",
  "Next.js",
  "Python",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Java",
  "AWS",
  "Git",
  "GitHub Actions",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Fardin1023",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fardin-kamran-73b694309/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/far.in.kamran.2024",
    icon: FaFacebook,
  },
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="hero-section relative overflow-hidden pt-24"
    >
      <div className="ambient-grid absolute inset-0" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--two" aria-hidden="true" />

      <div className="site-container relative z-10">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-14 py-14 lg:grid-cols-[1.04fr_.96fr] lg:gap-20 lg:py-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow-pill">
                <span className="hero-status-dot" />
                AI & ML Enthusiast · Full Stack Developer · Researcher
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-heading mt-7">
                <span className="hero-greeting block">Hi, I&apos;m Fardin Kamran.</span>
                <span className="block text-gradient">I build thoughtful digital products</span>
                <span className="hero-heading-serif mt-3 block">
                  and research-driven software.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="hero-intro mt-6 max-w-xl text-[15px] leading-7 md:text-base">
                Computer Science student exploring AI, software quality, computer
                graphics and full-stack engineering — with a focus on turning complex
                ideas into clear, useful and reliable products.
              </p>
            </Reveal>

            <Reveal delay={210} className="hero-location-row mt-5">
              <span><MapPin size={15} /> Dhaka, Bangladesh</span>
              <span><Sparkles size={15} /> Open to meaningful opportunities</span>
            </Reveal>

            <Reveal
              delay={250}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="primary-link-button">
                Contact Me
                <ArrowRight size={18} />
              </a>

              <AnimatedBorderButton as="a" href="/cv.pdf" download>
                <Download size={18} />
                Download CV
              </AnimatedBorderButton>
            </Reveal>

            <Reveal delay={310} className="mt-8">
              <p className="hero-connect-label mb-4 text-xs font-semibold uppercase tracking-[.28em]">
                Connect
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-chip"
                    aria-label={label}
                  >
                    <Icon size={17} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="hero-portrait-stage relative mx-auto w-full max-w-[470px] lg:justify-self-end"
          >
            <div className="hero-portrait-backdrop" aria-hidden="true" />
            <div className="hero-portrait-dots" aria-hidden="true" />

            <div className="profile-frame group relative">
              <div className="hero-photo-shell">
                <img
                  src="/optimized/profile.webp"
                  alt="Fardin Kamran"
                  width="800"
                  height="1200"
                  decoding="async"
                  className="hero-photo"
                />
              </div>

              <div className="hero-photo-card hero-photo-card--role">
                <span className="hero-photo-card-label">Focus</span>
                <strong>AI · Full Stack · Research</strong>
              </div>

              <div className="hero-photo-card hero-photo-card--availability">
                <span className="availability-dot is-available" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-tech-row py-8">
          <p className="mb-4 text-center text-xs uppercase tracking-[.26em]">
            Technologies I work with
          </p>

          <div className="marquee-mask overflow-hidden">
            <div className="skills-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <span key={`${skill}-${index}`} className="skill-word">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex justify-center pb-8 pt-2">
          <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
            <span>Scroll</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
