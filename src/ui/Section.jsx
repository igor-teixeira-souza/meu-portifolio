import React from "react";
import Container from "./Container";

const Section = ({ 
  children, 
  id,
  className = "",
  background = "default",
  padding = true,
  fullWidth = false
}) => {
  const backgrounds = {
    default: "bg-transparent",
    gradient: "bg-gradient-to-b from-[#0f172a] to-[#1e293b]",
    dark: "bg-gray-900",
    light: "bg-white",
    custom: ""
  };

  return (
    <section 
      id={id}
      className={`
        ${backgrounds[background]} 
        ${padding ? 'py-12 md:py-20' : ''}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
};

export default Section;