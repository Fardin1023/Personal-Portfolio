export const AnimatedBorderButton = ({
  children,
  className = "",
  as: Tag = "button",
  ...props
}) => {
  return (
    <Tag
      className={`animated-outline group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-base font-semibold text-white ${className}`}
      {...props}
    >
      <span className="animated-outline__shine" aria-hidden="true" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  );
};
