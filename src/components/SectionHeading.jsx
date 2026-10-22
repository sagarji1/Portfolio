import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = 'left', // 'left' | 'center'
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 rounded-md bg-[#EFEFEA] border border-[#E2E2DC] text-[11px] font-mono tracking-wider text-[#4A4B50] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121316] leading-[1.15]">
          {title}
          {subtitle && (
            <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-[#6C6D73] mt-2">
              {subtitle}
            </span>
          )}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#55565B] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
