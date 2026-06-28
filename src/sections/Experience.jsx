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
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-750 via-blue-300 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience*/}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
              style={{animationDelay:`${(idx + 1) * 150} ms`}}>
                <div></div>
                {/* Timeline dots*/}
                <div></div>

                {/* Content*/}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text" :"md:col-start-2 md:pl-16 "}`}>
                  <div>
                    <span>{exp.period}</span>
                    <h3>{exp.role}</h3>
                    <p>{exp.company}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
