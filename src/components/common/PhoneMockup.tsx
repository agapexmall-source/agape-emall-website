import React from 'react';

interface PhoneMockupProps {
  children?: React.ReactNode;
  activeScreen?: 'home' | 'listing' | 'chat' | 'profile';
  className?: string;
  id?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  activeScreen = 'home',
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      className={`relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-950/20 ${className}`}
    >
      {/* Notch / Speaker Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center">
        <div className="w-12 h-1.5 bg-slate-700 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-800 rounded-full ml-3"></div>
      </div>

      {/* Screen Container */}
      <div className="relative w-full h-full bg-slate-50 rounded-[38px] overflow-hidden flex flex-col z-10 text-slate-900 font-sans">
        {/* Status Bar */}
        <div className="h-8 bg-emerald-700 text-white px-6 pt-1 flex items-center justify-between text-[10px] font-semibold">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-4 h-2 bg-white rounded-xs"></div>
          </div>
        </div>

        {/* Content Area */}
        {children ? (
          <div className="flex-1 overflow-hidden">{children}</div>
        ) : (
          <DefaultAppScreen activeScreen={activeScreen} />
        )}

        {/* Bottom Home Indicator */}
        <div className="h-5 bg-white flex items-center justify-center shrink-0">
          <div className="w-28 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const DefaultAppScreen: React.FC<{ activeScreen: 'home' | 'listing' | 'chat' | 'profile' }> = ({
  activeScreen,
}) => {
  if (activeScreen === 'listing') {
    return (
      <div className="flex-1 bg-slate-50 flex flex-col text-left overflow-y-auto">
        <div className="h-48 bg-slate-200 relative flex items-center justify-center">
          <span className="text-4xl">📱</span>
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            VERIFIED SELLER
          </span>
        </div>
        <div className="p-3 space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Phones & Tablets
          </div>
          <div className="font-extrabold text-sm text-slate-900">iPhone 14 Pro Max - 256GB Gold</div>
          <div className="text-lg font-black text-emerald-700">GH₵ 9,800</div>
          <p className="text-[11px] text-slate-600 line-clamp-2">
            Brand new in box. Factory unlocked, complete original accessories included. Accra pickup.
          </p>
          <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              A
            </div>
            <div className="text-left text-[11px]">
              <div className="font-bold text-slate-900">Agape Digital Store</div>
              <div className="text-slate-500 text-[9px]">Osu, Accra • Active 5m ago</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-emerald-600 text-white text-[11px] font-bold py-2 text-center rounded-lg">
              Call Merchant
            </div>
            <div className="bg-amber-500 text-slate-900 text-[11px] font-bold py-2 text-center rounded-lg">
              Chat on App
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-slate-50 flex flex-col text-left overflow-hidden">
      {/* App Header */}
      <div className="bg-emerald-700 text-white p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-white text-emerald-700 font-black text-xs flex items-center justify-center">
              A
            </div>
            <span className="font-black text-sm tracking-tight">Agape Mall</span>
          </div>
          <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded-full font-medium">Accra</span>
        </div>
        <div className="bg-white rounded-lg px-2.5 py-1.5 text-slate-400 text-xs flex items-center gap-1.5 shadow-inner">
          <span>🔍</span>
          <span>Search phones, cars, electronics...</span>
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex-1 p-2.5 space-y-3 overflow-y-auto">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-700 rounded-xl p-2.5 text-white flex items-center justify-between">
          <div>
            <div className="text-[10px] font-semibold text-emerald-200">SPECIAL OFFER</div>
            <div className="text-xs font-extrabold">Sell Fast in Ghana</div>
            <div className="text-[9px] text-emerald-100">Zero commission fees</div>
          </div>
          <div className="bg-amber-400 text-slate-900 font-bold text-[10px] px-2 py-1 rounded-lg">
            Post Free
          </div>
        </div>

        <div>
          <div className="text-xs font-extrabold text-slate-800 mb-2 flex items-center justify-between">
            <span>Featured Categories</span>
            <span className="text-[10px] text-emerald-600 font-bold">See All</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { icon: '📱', label: 'Phones' },
              { icon: '🚗', label: 'Vehicles' },
              { icon: '💻', label: 'Computers' },
              { icon: '🏠', label: 'Property' },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-1.5 border border-slate-200 text-center shadow-2xs"
              >
                <div className="text-sm">{cat.icon}</div>
                <div className="text-[9px] font-bold text-slate-700 mt-0.5">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-extrabold text-slate-800 mb-2">🔥 Hot Deals Nearby</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { title: 'Toyota Camry 2020', price: 'GH₵ 145,000', loc: 'East Legon' },
              { title: 'MacBook Pro M2', price: 'GH₵ 18,500', loc: 'Spintex' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-2 shadow-2xs">
                <div className="h-16 bg-slate-200 rounded-lg mb-1.5 flex items-center justify-center text-lg">
                  {i === 0 ? '🚗' : '💻'}
                </div>
                <div className="font-bold text-[11px] text-slate-900 truncate">{item.title}</div>
                <div className="text-xs font-extrabold text-emerald-700">{item.price}</div>
                <div className="text-[9px] text-slate-400 mt-0.5">{item.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
