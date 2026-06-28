import { useMemo } from "react";
import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const skills = [
  "React",
  "Next.js",
  "Python",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Canva",
  "Java",
  "AWS",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 10 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite alternate`,
        animationDelay: `${Math.random() * 5}s`,
      })),
    []
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/blue_bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={dot}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-cyan-50">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                AI & ML Enthusiast • Full Stack Developer • Open Source Contributor
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in animation-delay-200">
                Crafting{" "}
                <span className="text-primary-foreground glow-text">
                  digital
                </span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal">
                  creativity and innovation.
                </span>
              </h1>

              <p className="max-w-lg text-lg text-muted-foreground animate-fade-in animation-delay-200">
                This is Fardin Kamran, a curious and ambitious Computer Science
                student focused on AI, software quality, and computer graphics,
                with interests in LLMs, OpenGL development, research, and
                technology-driven entrepreneurship.
              </p>
            </div>

           {/* Social Media */}
<div className="animate-fade-in animation-delay-300 space-y-6">

  <div>
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
      Follow Me
    </p>

    <div className="flex items-center gap-6">

      {/* GitHub */}
      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <div className="rounded-full border border-white/20 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110">
          <FaGithub className="text-2xl text-white" />
        </div>

        <span className="hidden md:block text-muted-foreground group-hover:text-white transition">
          GitHub
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <div className="rounded-full border border-white/20 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110">
          <FaLinkedin className="text-2xl text-[#0A66C2]" />
        </div>

        <span className="hidden md:block text-muted-foreground group-hover:text-white transition">
          LinkedIn
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <div className="rounded-full border border-white/20 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110">
          <FaFacebook className="text-2xl text-[#1877F2]" />
        </div>

        <span className="hidden md:block text-muted-foreground group-hover:text-white transition">
          Facebook
        </span>
      </a>

    </div>
  </div>

  {/* CTA Buttons */}
  <div className="flex flex-wrap gap-4">

    {/* Contact */}
    <button className="flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105">
      Contact Me
      <ArrowRight className="w-5 h-5" />
    </button>

    {/* Download CV */}
    <AnimatedBorderButton>
      <Download className="w-5 h-5"/>
      Download CV
    </AnimatedBorderButton>

  </div>

</div>
</div>
          {/* Right */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 via-transparent to-blue-500/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">

                <img
                  src="/dp.png"
                  alt="Fardin Kamran"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Available Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-blue-700">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 animate-fade-in animation-delay-600">

          <p className="mb-6 text-center text-sm text-muted-foreground">
            Technologies I work with
          </p>

          <div className="relative w-full overflow-hidden">

            <div className="flex w-max whitespace-nowrap animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="shrink-0 px-8 py-4"
                >
                  <span className="text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center animate-fade-in">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition"
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll
            </span>

            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};