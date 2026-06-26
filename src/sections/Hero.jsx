import { useMemo } from "react";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "Python",
  "MongoDB",
  "MYsql",
  "Tailwind CSS",
  "Canva",
  "Java",
  "AWS",
  "Git",
  "Github Actions",
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
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="/blue_bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Blue Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={dot}
          ></div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column -Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-50">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                AI & ML Enthusiast * Full Stack Developer * Open Source
                Contributer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in animation-delay-200">
                Crafting{" "}
                <span className="text-primary-foreground glow-text">
                  digital
                </span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  creativity and innovation.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mt-4 animate-fade-in animation-delay-200">
                This is Fardin Kamran, a curious and ambitious Computer Science
                student focused on AI, software quality, and computer graphics,
                with interests in LLMs, OpenGL development, research, and
                technology-driven entrepreneurship.
              </p>
            </div>
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <button className="relative w-30 h-20 bg-blue-400 text-lg rounded-full">
                {/* Animated SVG border*/}
                Contact Me <ArrowRight className="w-5 h-5" />
              </button>
              <AnimatedBorderButton />
            </div>
          </div>
          {/* Right Column -Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 via-transparent to-blue-500/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/dp.png"
                  alt="Fardin Kamran"
                  className="w-full aspect-[4/5] object cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Work{" "}
                    </span>
                  </div>
                  {/* Stats Badge */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                    <div className="text-2xl font-bold text-blue-700">2+</div>
                    <div className="text-xs text-muted-foreground">
                      {" "}
                      Years Exp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
