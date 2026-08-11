import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg focus:ring-emerald-500 border border-transparent',
    secondary:
      'bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-sm hover:shadow focus:ring-amber-400 border border-transparent font-bold',
    outline:
      'bg-transparent hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 focus:ring-emerald-500',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md focus:ring-slate-700 border border-transparent',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-400 border border-transparent',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs sm:text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm sm:text-base gap-2',
    lg: 'px-7 py-3.5 text-base sm:text-lg gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
