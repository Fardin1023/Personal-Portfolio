const experiences = [
  {
    period: "2025-2026",
    role: "It Operator",
    company: "Synergy Business Solutions",
    description: "Dealt with IP routing and Addressing",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Setion header*/}
        <div className="max-w-3xl mb-16">
          <span className="text-blue-800 text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-blue-300">
            Experience that{" "}
            <span className="font-serif italic font-normal text-cyan-500">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-white animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious begineer to an
            individual that is aiming to make a name for himself in the tech
            world and aiming to build larger than life projects.
          </p>
        </div>
      </div>
    </section>
  );
};
