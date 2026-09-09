const Container = ({
  children,
  className = "",
  size = "lg", // sm, md, lg, xl, full
  padding = true,
}) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-[90rem]",
    xl: "max-w-[100rem]",
    full: "max-w-full",
  };

  return (
    <div
      className={`${sizes[size]} mx-auto w-full px-4 sm:px-8 lg:px-10 xl:px-12 ${padding ? "py-10 sm:py-14 lg:py-20" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
