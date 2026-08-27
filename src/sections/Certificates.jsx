import { ExternalLink, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";

const certificates = [
  {
    title: "Internship Completion",
    image: "/certificates/internship.webp",
    pdf: "/certificates/internship.pdf",
  },
  {
    title: "Training in Sourcing",
    image: "/certificates/sourcing.webp",
    pdf: "/certificates/sourcing.pdf",
  },
  {
    title: "Training in Tech Support",
    image: "/certificates/tech-support.webp",
    pdf: "/certificates/tech-support.pdf",
  },
];

export const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // Trigger certificate flip animation when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate only once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Modal controls
  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="section-shell cv-auto"
    >
      <div className="site-container">
        {/* Section heading */}
        <Reveal>
          <div className="certificates-heading">
            <span className="section-kicker">Credentials</span>

            <h2 className="section-title mt-4">
              Certificates<span className="text-gradient">.</span>
            </h2>
          </div>
        </Reveal>

        {/* Certificates */}
        <div
          className={`certificates-grid ${
            isVisible ? "certificates-visible" : ""
          }`}
        >
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className="certificate-flip-item"
              style={{
                "--flip-delay": `${index * 190}ms`,
              }}
            >
              <div className="certificate-flip-scene">
                <button
                  type="button"
                  className="certificate-flip-inner"
                  onClick={() => setSelected(certificate)}
                  aria-label={`View ${certificate.title}`}
                >
                  {/* Back side shown during flip */}
                  <div
                    className="certificate-face certificate-back"
                    aria-hidden="true"
                  >
                    <div className="certificate-back-content">
                      <span className="certificate-back-logo">
                        FK<span>.</span>
                      </span>

                      <div className="certificate-back-line" />

                      <span className="certificate-back-text">
                        Certificate
                      </span>
                    </div>
                  </div>

                  {/* Actual certificate */}
                  <div className="certificate-face certificate-front">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="900"
                    />

                    <div className="certificate-hover-overlay">
                      <div className="certificate-view-button">
                        <Maximize2 size={16} />
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selected && (
        <div
          className="certificate-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <div
            className="certificate-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate`}
          >
            {/* Modal top bar */}
            <div className="certificate-modal-top">
              <span>{selected.title}</span>

              <div className="certificate-modal-actions">
                <a
                  href={selected.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-modal-icon"
                  aria-label="Open original PDF"
                >
                  <ExternalLink size={18} />
                </a>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="certificate-modal-icon"
                  aria-label="Close certificate"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* Certificate image */}
            <div className="certificate-modal-image">
              <img
                src={selected.image}
                alt={selected.title}
                decoding="async"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};