import React from "react";

const Heading = ({ 
  title,
  subtitle,
  tagline,
  align = "center", // left, center, right
  className = "",
  titleSize = "xl", // sm, md, lg, xl, 2xl
  gradient = false,
  gradientColors = "from-blue-400 to-purple-400"
}) => {
  const titleSizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl", 
    xl: "text-4xl md:text-6xl",
    "2xl": "text-5xl md:text-7xl"
  };

  return (
    <div className={`text-${align} mb-8 md:mb-12 ${className}`}>
      {tagline && (
        <span className="inline-block text-sm md:text-base font-semibold text-blue-400 mb-3 px-4 py-1 rounded-full bg-blue-500/10">
          {tagline}
        </span>
      )}
      
      {title && (
        <h2 className={`${titleSizes[titleSize]} font-bold text-white mb-4`}>
          {gradient ? (
            <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
              {title}
            </span>
          ) : (
            title
          )}
        </h2>
      )}
      
      {subtitle && (
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;