import React from 'react';

export interface PhoneMockupProps {
  src?: string;
  activeScreen?:
    | 'home'
    | 'hotdeals'
    | 'listing'
    | 'productlisting'
    | 'details'
    | 'detailspage'
    | 'seller';
  alt?: string;
  className?: string;
  id?: string;
  priority?: boolean;
}

const screenshotMap: Record<string, string> = {
  home: '/screenshots/homepage.jpeg',
  hotdeals: '/screenshots/hotdeals.jpeg',
  listing: '/screenshots/hotdeals.jpeg',
  productlisting: '/screenshots/productlisting.jpeg',
  details: '/screenshots/details_page.jpeg',
  detailspage: '/screenshots/detailspage.jpeg',
  seller: '/screenshots/seller_info.jpeg',
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  activeScreen = 'home',
  alt = 'Agape Mall mobile app screenshot',
  className = '',
  id,
  priority = false,
}) => {
  const imageSrc =
    src || screenshotMap[activeScreen] || screenshotMap.home;

  return (
    <div
      id={id}
      className={`relative mx-auto ${className}`}
    >
      {/* Outer phone body */}
      <div className="relative rounded-[38px] bg-[#111614] p-[7px] shadow-[0_28px_70px_rgba(0,0,0,0.30)] ring-1 ring-black/30">
        
        {/* Metallic / bezel edge */}
        <div className="rounded-[34px] bg-[#202623] p-[3px] ring-1 ring-white/10">
          
          {/* Real screenshot */}
          <div className="overflow-hidden rounded-[31px] bg-black">
            <img
              src={imageSrc}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Very subtle side buttons */}
        <div className="pointer-events-none absolute -left-[3px] top-[22%] h-12 w-[3px] rounded-l bg-[#252b28]" />
        <div className="pointer-events-none absolute -left-[3px] top-[34%] h-16 w-[3px] rounded-l bg-[#252b28]" />
        <div className="pointer-events-none absolute -right-[3px] top-[28%] h-20 w-[3px] rounded-r bg-[#252b28]" />
      </div>
    </div>
  );
};