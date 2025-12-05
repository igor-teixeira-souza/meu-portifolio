import React from "react";

const Badge = ({ 
  children,
  color = "blue", // blue, green, red, yellow, purple, gray
  variant = "solid", // solid, outline, subtle
  size = "md", // sm, md, lg
  rounded = "full",
  className = ""
}) => {
  const colors = {
    blue: {
      solid: "bg-blue-500 text-white",
      outline: "border border-blue-500 text-blue-400",
      subtle: "bg-blue-500/20 text-blue-400"
    },
    green: {
      solid: "bg-green-500 text-white",
      outline: "border border-green-500 text-green-400",
      subtle: "bg-green-500/20 text-green-400"
    },
    red: {
      solid: "bg-red-500 text-white",
      outline: "border border-red-500 text-red-400",
      subtle: "bg-red-500/20 text-red-400"
    },
    yellow: {
      solid: "bg-yellow-500 text-white",
      outline: "border border-yellow-500 text-yellow-400",
      subtle: "bg-yellow-500/20 text-yellow-400"
    },
    purple: {
      solid: "bg-purple-500 text-white",
      outline: "border border-purple-500 text-purple-400",
      subtle: "bg-purple-500/20 text-purple-400"
    },
    gray: {
      solid: "bg-gray-500 text-white",
      outline: "border border-gray-500 text-gray-400",
      subtle: "bg-gray-500/20 text-gray-400"
    }
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base"
  };

  const roundedClass = {
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full"
  };

  return (
    <span className={`
      inline-flex items-center font-medium
      ${colors[color][variant]}
      ${sizes[size]}
      ${roundedClass[rounded]}
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;