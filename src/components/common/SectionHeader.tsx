import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-extrabold tracking-wider uppercase text-[#0C3229] bg-[#D3B15F]/20 rounded-full border border-[#D3B15F]/40 shadow-2xs">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-inherit tracking-tight leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg opacity-85 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
