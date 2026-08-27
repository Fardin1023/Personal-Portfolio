import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
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
  { label: "GitHub", href: "https://github.com/YOUR_USERNAME", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME", icon: FaLinkedin },
  { label: "Facebook", href: "https://facebook.com/YOUR_USERNAME", icon: FaFacebook },
];

export const Hero = () => {
  return (
    <section id="top" className="hero-section relative overflow-hidden pt-24">
      <div className="hero-media absolute inset-0" aria-hidden="true">
        <img
          src="/optimized/hero-bg.webp"
          alt=""
          width="2200"
          height="1650"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,19,.3)_0%,rgba(6,9,19,.82)_60%,#060913_100%)]" />
      </div>

      <div className="ambient-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--two" aria-hidden="true" />

      <div className="site-container relative z-10">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-16 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow-pill">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,.75)]" />
                AI & ML Enthusiast · Full Stack Developer · Researcher
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-[clamp(3rem,7vw,5.8rem)] font-black leading-[.96] tracking-[-0.055em] text-white">
                Building digital
                <span className="block text-gradient">experiences</span>
                <span className="mt-3 block font-serif text-[.73em] font-normal italic tracking-[-0.035em] text-slate-200">
                  with intent and imagination.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                I&apos;m Fardin Kamran, a Computer Science student exploring AI,
                software quality, computer graphics, full-stack development and
                research-driven products.
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="primary-link-button">
                Contact Me <ArrowRight size={18} />
              </a>
              <AnimatedBorderButton as="a" href="/cv.pdf" download>
                <Download size={18} /> Download CV
              </AnimatedBorderButton>
            </Reveal>

            <Reveal delay={290} className="mt-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.28em] text-slate-500">
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

          <Reveal delay={120} className="relative mx-auto w-full max-w-[470px] lg:justify-self-end">
            <div className="profile-glow absolute -inset-6 rounded-[2.2rem]" aria-hidden="true" />
            <div className="profile-frame group relative overflow-visible rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,.35)]">
              <div className="overflow-hidden rounded-[1.55rem] bg-[#0c1322]">
                <img
                  src="/optimized/profile.webp"
                  alt="Fardin Kamran"
                  width="800"
                  height="1200"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>

              <div className="absolute -left-5 top-7 rounded-2xl border border-white/10 bg-[#0b1120]/88 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-xs text-slate-400">Years of experience</div>
              </div>

              <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1120]/90 px-4 py-2.5 text-sm text-slate-200 shadow-xl backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.7)]" />
                Available for opportunities
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="border-t border-white/[0.06] py-8">
          <p className="mb-4 text-center text-xs uppercase tracking-[.26em] text-slate-600">
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
