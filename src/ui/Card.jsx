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
  border = true,
}) => {
  const cardContent = (
    <div
      className={`
      group relative bg-[#202720] 
      rounded-xl ${padding ? "p-6 sm:p-7 lg:p-8" : ""} 
      ${border ? "border border-white/10" : ""}
      transition-all duration-300 h-full 
      ${
        hoverEffect
          ? "hover:-translate-y-1 hover:border-[#a8e6cf]/40 hover:shadow-2xl hover:shadow-black/20"
          : ""
      }
      ${className}
    `}
    >
      {/* Efeitos visuais */}
      {hoverEffect && (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
          ></div>
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-transparent via-[#a8e6cf]/20 to-transparent opacity-0 blur transition duration-500 group-hover:opacity-100"></div>
        </>
      )}

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        {(icon || title || badge) && (
          <div
            className={`flex ${
              align === "center" ? "justify-center" : "justify-between"
            } items-start mb-4`}
          >
            <div className="flex w-full items-center gap-5 lg:gap-6">
              {icon && (
                <div
                  className={`rounded-lg bg-gradient-to-br ${gradient} p-3 bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30`}
                >
                  {icon}
                </div>
              )}
              <div className={`text-${align}`}>
                {title && (
                  <h3 className="text-xl font-bold tracking-tight text-[#f4f1e8] sm:text-2xl">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="mt-1 text-base text-[#9fa59b]">{subtitle}</p>
                )}
              </div>
            </div>

            {badge && (
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}
              >
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
        <div className={`portfolio-card-content flex-1 text-${align}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-6 pt-4 border-t border-gray-800">{footer}</div>
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
      <button onClick={onClick} className="block w-full h-full text-left">
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export default Card;
