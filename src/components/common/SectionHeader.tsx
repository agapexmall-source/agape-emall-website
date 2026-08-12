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
      className={`
        mb-12
        max-w-3xl
        ${centered ? 'mx-auto text-center' : ''}
        ${className}
      `}
    >
      {badge && (
        <span
          className="
            inline-flex
            items-center
            justify-center

            px-4
            py-2
            mb-4

            text-xs
            sm:text-sm

            font-black
            tracking-[0.08em]
            uppercase

            text-[#062019]
            bg-[#D3B15F]

            border
            border-[#E7CB7A]

            rounded-full

            shadow-sm

            leading-none
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl

          font-black
          text-inherit

          tracking-tight
          leading-[1.15]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-4

            text-base
            sm:text-lg

            opacity-90

            leading-relaxed
            font-normal
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};