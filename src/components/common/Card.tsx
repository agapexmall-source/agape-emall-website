import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  id,
}) => {
  return (
    <div
      id={id}
      className={`bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm ${
        hoverEffect ? 'hover:shadow-md hover:border-emerald-200 transition-all duration-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
