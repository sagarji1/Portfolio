import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  external = false,
  download = false,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none rounded-lg group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#121316] text-[#FBFBF9] hover:bg-[#23252a] active:scale-[0.99] shadow-xs border border-transparent hover:border-[#121316]/80',
    secondary:
      'bg-[#F0F0EC] text-[#121316] hover:bg-[#E6E6E1] border border-[#E2E2DC] active:scale-[0.99]',
    outline:
      'bg-transparent text-[#121316] border border-[#D5D5CD] hover:border-[#121316] hover:bg-[#F5F5F1] active:scale-[0.99]',
    ghost:
      'bg-transparent text-[#55565B] hover:text-[#121316] hover:bg-[#F0F0EB]',
    accent:
      'bg-lime-500 text-neutral-950 font-semibold hover:bg-lime-400 border border-lime-600/20 active:scale-[0.99] shadow-xs',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
