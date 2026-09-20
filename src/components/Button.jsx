export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-emerald-700 text-white shadow-[0_10px_35px_rgba(21,128,61,0.18)] hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-[0_14px_40px_rgba(21,128,61,0.24)]",
    secondary:
      "border border-emerald-900/15 bg-white text-emerald-950 hover:-translate-y-0.5 hover:border-emerald-700/30 hover:bg-emerald-50",
    ghost:
      "text-emerald-900/75 hover:bg-emerald-50 hover:text-emerald-950",
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
