import React from "react";

const Button = ({ 
  children,
  icon,
  variant = "primary", // primary, secondary, outline, ghost, gradient
  size = "md", // sm, md, lg
  fullWidth = false,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false
}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white",
    outline: "border border-gray-700 hover:border-blue-500 text-white hover:text-blue-400",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800/50",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  const buttonClass = `
    inline-flex items-center justify-center gap-3
    font-semibold transition-all duration-300
    hover:scale-105 active:scale-95
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {content}
    </button>
  );
};

export default Button;