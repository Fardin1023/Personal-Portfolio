import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const availability = {
  isAvailable: true,
  availableLabel: "Available for opportunities",
  unavailableLabel: "Currently focused on selected opportunities",
};

export const AvailabilityStatus = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = null;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.65);
        frame = null;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href="#contact"
      className={`availability-dock ${visible ? "availability-dock--visible" : ""}`}
      aria-label="Go to contact section"
    >
      <span className={`availability-dot ${availability.isAvailable ? "is-available" : ""}`} />
      <span>{availability.isAvailable ? availability.availableLabel : availability.unavailableLabel}</span>
      <ArrowUpRight size={14} />
    </a>
  );
};
