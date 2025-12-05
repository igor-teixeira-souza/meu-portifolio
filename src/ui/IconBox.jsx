import React from "react";

const IconBox = ({ 
  icon,
  size = "md",
  gradient = "from-blue-500 to-purple-500",
  className = "",
  hoverEffect = true
}) => {
  const sizes = {
    sm: "w-10 h-10 p-2",
    md: "w-12 h-12 p-3",
    lg: "w-16 h-16 p-4",
    xl: "w-20 h-20 p-5"
  };

  return (
    <div className={`
      inline-flex items-center justify-center
      rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20
      ${hoverEffect ? 'group-hover:bg-opacity-30 transition-all duration-300' : ''}
      ${sizes[size]}
      ${className}
    `}>
      <div className={`text-white ${size === 'xl' ? 'scale-125' : ''}`}>
        {icon}
      </div>
    </div>
  );
};

export default IconBox;