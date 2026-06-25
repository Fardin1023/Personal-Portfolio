import { useMemo } from "react";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

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
            <div>
              <button className="lg items-center bg-blue-600 text-black hover:bg-blue-900 rounded-full hover:text-white animate-fade-in animation-delay-300">
                Contact Me <ArrowRight className="w-5 h-5"/>
              </button>
              <button>
                  {/* Animated SVG border*/}
                  <svg className="absolute left-0 top-0 w-full h-full pointer-events-auto viewBox="0 0 200 60" preserveAspectRatio="none" style={{overflow:"visible"}}
                  >
                    <path
                    d="M 30,1 A 29, 29 0 0 0 1,30 L 1, 30 A 29,29 0 0 0 30,59 L"
                    fill="none" stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="400 550"
                    strokeDashoffset="400"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="download-cv-path"
                    />
                  </svg>
              </button>
            </div>
          </div>
          {/* Right Column -Profile Image */}
        </div>
      </div>
    </section>
  );
};
