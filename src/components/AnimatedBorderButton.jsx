import { Download } from "lucide-react";

export const AnimatedBorderButton = ( {children}) => {
  return (
    <button
      className="
        relative
        group
        overflow-hidden
        rounded-full
        border
        border-blue-500/30
        px-8
        py-4
        text-lg
        font-medium
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:border-blue-400
      "
    >
      {/* Animated Border */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 220 60"
        preserveAspectRatio="none"
      >
        <rect
          x="1.5"
          y="1.5"
          width="217"
          height="57"
          rx="28"
          ry="28"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeDasharray="560"
          strokeDashoffset="560"
          className="animated-border-path"
        />
      </svg>

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
      {children}
      </span>
    </button>
  );
};