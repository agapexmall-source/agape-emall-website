import React from 'react';

export interface PhoneMockupProps {
  src?: string;
  activeScreen?: 'home' | 'hotdeals' | 'listing' | 'productlisting' | 'details' | 'detailspage' | 'seller';
  alt?: string;
  className?: string;
  id?: string;
  priority?: boolean;
}

const screenshotMap: Record<string, string> = {
  home: '/screenshots/homepage(1).jpeg',
  hotdeals: '/screenshots/hotdeals(1).jpeg',
  listing: '/screenshots/hotdeals(1).jpeg',
  productlisting: '/screenshots/productlisting(1).jpeg',
  details: '/screenshots/details_page.jpeg',
  detailspage: '/screenshots/detailspage.jpeg',
  seller: '/screenshots/seller_info.jpeg',
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  activeScreen = 'home',
  alt = 'Agape Mall Mobile App',
  className = '',
  id,
  priority = false,
}) => {
  const imageSrc = src || screenshotMap[activeScreen] || screenshotMap.home;

  return (
    <div
      id={id}
      className={`relative mx-auto w-[280px] sm:w-[310px] md:w-[330px] rounded-[44px] bg-[#062019] p-2.5 sm:p-3 shadow-2xl border-4 border-[#0C3229] ring-1 ring-black/30 group ${className}`}
    >
      {/* Smartphone Dynamic Island / Speaker Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md pointer-events-none">
        <div className="w-2.5 h-2.5 bg-[#0C3229] rounded-full border border-slate-700"></div>
        <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
      </div>

      {/* Screen Frame Container */}
      <div className="relative w-full aspect-[9/19.5] bg-black rounded-[36px] overflow-hidden z-10 shadow-inner">
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Glossy Screen Overlay */}
      <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20"></div>
    </div>
  );
};
