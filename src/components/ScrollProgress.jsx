import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const scrollable = root.scrollHeight - root.clientHeight;
        const next = scrollable > 0 ? (root.scrollTop / scrollable) * 100 : 0;
        setProgress(Math.min(100, Math.max(0, next)));
        frame = null;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
};
