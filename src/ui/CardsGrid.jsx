import React from "react";

const CardsGrid = ({ 
  children, 
  cols = 3, // 1, 2, 3, 4, 5
  gap = "gap-6", // gap-4, gap-6, gap-8
  className = "",
  align = "stretch" // stretch, start, center, end
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
  };

  const alignments = {
    stretch: "items-stretch",
    start: "items-start",
    center: "items-center",
    end: "items-end"
  };

  return (
    <div className={`grid ${gridCols[cols]} ${gap} ${alignments[align]} ${className}`}>
      {children}
    </div>
  );
};

export default CardsGrid;