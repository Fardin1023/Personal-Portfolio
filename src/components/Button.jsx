export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-blue-500 text-white shadow-[0_10px_35px_rgba(59,130,246,0.22)] hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_14px_40px_rgba(59,130,246,0.32)]",
    secondary:
      "border border-white/12 bg-white/[0.035] text-white hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-400/10",
    ghost:
      "text-slate-300 hover:bg-white/[0.05] hover:text-white",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
