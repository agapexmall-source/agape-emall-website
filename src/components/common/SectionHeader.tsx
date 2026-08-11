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
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wide uppercase text-emerald-800 bg-emerald-100 rounded-full border border-emerald-200">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
