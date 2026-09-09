const Heading = ({
  title,
  subtitle,
  tagline,
  align = "center", // left, center, right
  className = "",
  titleSize = "xl", // sm, md, lg, xl, 2xl
  gradient = false,
}) => {
  const titleSizes = {
    sm: "text-2xl sm:text-3xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
    xl: "text-4xl sm:text-5xl lg:text-6xl",
    "2xl": "text-5xl sm:text-6xl lg:text-7xl",
  };

  return (
    <div className={`text-${align} mb-10 sm:mb-14 ${className}`}>
      {tagline && (
        <span className="mb-4 inline-block border-l-2 border-[#ff7557] pl-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a8e6cf] sm:text-sm">
          {tagline}
        </span>
      )}

      {title && (
        <h2
          className={`${titleSizes[titleSize]} mb-4 font-bold tracking-tight text-[#f4f1e8]`}
        >
          {gradient ? <span className="text-[#f4f1e8]">{title}</span> : title}
        </h2>
      )}

      {subtitle && (
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#b9b9ab] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
