export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF5BB] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#FFF5BB] text-[#006666] shadow-[0_10px_35px_rgba(157,188,188,0.18)] hover:-translate-y-0.5 hover:bg-[#9DBCBC] hover:shadow-[0_14px_40px_rgba(157,188,188,0.24)]",
    secondary:
      "border border-[#9DBCBC] bg-[#6B6B6B] text-[#FFF5BB] hover:-translate-y-0.5 hover:border-[#FFF5BB]/60 hover:bg-[#9DBCBC]",
    ghost:
      "text-[#B7B7B7] hover:bg-[#6B6B6B] hover:text-[#FFF5BB]",
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
