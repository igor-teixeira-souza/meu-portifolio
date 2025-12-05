import React from "react";

const Card = ({ 
  children,
  title,
  subtitle,
  icon,
  image,
  gradient = "from-blue-500 to-purple-500",
  badge,
  badgeColor = "bg-blue-500/20 text-blue-400",
  hoverEffect = true,
  className = "",
  onClick,
  link,
  footer,
  align = "left",
  padding = true,
  border = true
}) => {
  const cardContent = (
    <div className={`
      group relative bg-gray-900/50 backdrop-blur-sm 
      rounded-2xl ${padding ? 'p-6' : ''} 
      ${border ? 'border border-gray-800' : ''}
      transition-all duration-500 h-full
      ${hoverEffect ? 'hover:border-transparent hover:scale-105 hover:shadow-2xl' : ''}
      ${className}
    `}>
      {/* Efeitos visuais */}
      {hoverEffect && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
        </>
      )}

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        {(icon || title || badge) && (
          <div className={`flex ${align === 'center' ? 'justify-center' : 'justify-between'} items-start mb-4`}>
            <div className="flex items-center gap-3">
              {icon && (
                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                  {icon}
                </div>
              )}
              <div className={`text-${align}`}>
                {title && (
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                )}
                {subtitle && (
                  <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
                )}
              </div>
            </div>
            
            {badge && (
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="mb-4 rounded-xl overflow-hidden">
            <img 
              src={image} 
              alt={title || "Card image"} 
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 text-${align}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-6 pt-4 border-t border-gray-800">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Render logic
  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className="block w-full h-full text-left"
      >
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export default Card;