import React from "react";

const Container = ({ 
  children, 
  className = "",
  size = "lg", // sm, md, lg, xl, full
  padding = true
}) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${padding ? 'py-8 sm:py-12' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Container;