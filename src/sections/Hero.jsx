import { useMemo } from "react";

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
      <div>
        <div>
          {/* Left Column -Text Content */}
          <div>
            <div>
              <span className ="w-2 h-2 bg-primary rounded-full inline-block animate-pulse mr-2">
                AI & ML Enthusiast / Full Stack Developer / Open Source
                Contributer
              </span>
            </div>
          </div>
          {/* Right Column -Profile Image */}
        </div>
      </div>
    </section>
  );
};
