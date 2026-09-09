import Container from "./Container";

const Section = ({
  children,
  id,
  className = "",
  background = "default",
  padding = true,
  fullWidth = false,
}) => {
  const backgrounds = {
    default: "bg-[#121412]",
    gradient: "bg-[#1c211d]",
    dark: "bg-[#121412]",
    light: "bg-[#f4f1e8]",
    custom: "",
  };

  return (
    <section
      id={id}
      className={`
        ${backgrounds[background]} 
        border-b border-white/[0.06]
        ${padding ? "py-4 md:py-8" : ""}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
};

export default Section;
