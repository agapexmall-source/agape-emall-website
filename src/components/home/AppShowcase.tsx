import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { PhoneMockup } from '../common/PhoneMockup';
import { QRCodeGenerator } from '../common/QRCodeGenerator';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { Smartphone, Flame, ShoppingBag, Store, Tag } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'hotdeals' | 'productlisting' | 'details' | 'seller'>('home');

  const showcaseTabs = [
    {
      id: 'home' as const,
      title: 'App Homepage & Categories',
      subtitle: 'Branded green search header, quick category navigation, and top featured deals.',
      src: '/screenshots/homepage(1).jpeg',
      icon: <Smartphone className="w-5 h-5 text-[#0C3229]" />,
    },
    {
      id: 'hotdeals' as const,
      title: 'Live Hot Deals Feed',
      subtitle: 'Verified discounted items with live countdown timers and deal filters.',
      src: '/screenshots/hotdeals(1).jpeg',
      icon: <Flame className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      id: 'productlisting' as const,
      title: 'Marketplace Product Feed',
      subtitle: 'Featured vehicles, laptops, fashion, and daily essentials across Ghana.',
      src: '/screenshots/productlisting(1).jpeg',
      icon: <ShoppingBag className="w-5 h-5 text-[#0C3229]" />,
    },
    {
      id: 'details' as const,
      title: 'Rich Product Page & Offers',
      subtitle: 'Direct in-app Chat, Call merchant buttons, and instant "Make an offer".',
      src: '/screenshots/details_page.jpeg',
      icon: <Tag className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      id: 'seller' as const,
      title: 'Verified Merchant Profiles',
      subtitle: 'Silver & Gold seller badges, store addresses, ratings, and active listings.',
      src: '/screenshots/seller_info.jpeg',
      icon: <Store className="w-5 h-5 text-[#0C3229]" />,
    },
  ];

  return (
    <section id="app-showcase" className="py-20 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          badge="Real App Screenshots"
          title="Experience Agape Mall in Your Pocket"
          subtitle="Designed for maximum speed, intuitive search, and instant buyer-seller communication on any smartphone."
        />

        {/* Desktop Interactive Showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center">
          {/* Left Feature Tabs Selection */}
          <div className="col-span-6 space-y-3">
            {showcaseTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#F7F6F2] border-[#0C3229] shadow-md ring-1 ring-[#0C3229]/20'
                      : 'bg-white border-slate-200 hover:bg-[#F7F6F2]/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#0C3229] text-[#D3B15F]' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tab.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#171A18]">{tab.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{tab.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2 p-5 rounded-2xl bg-[#062019] text-white border border-[#D3B15F]/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#D3B15F]">Ready to Start Shopping?</div>
                <p className="text-[11px] text-slate-300">Download free on iOS or Android.</p>
              </div>
              <AppStoreButtons layout="row" size="sm" />
            </div>
          </div>

          {/* Right Phone Mockup Display */}
          <div className="col-span-6 flex items-center justify-center gap-6">
            <PhoneMockup activeScreen={activeTab} className="w-[310px]" />
            <div className="shrink-0 hidden xl:block">
              <QRCodeGenerator size={120} />
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Scroll Gallery (Mobile First, No horizontal page overflow) */}
        <div className="lg:hidden space-y-6">
          <div className="text-xs text-center font-bold text-[#0C3229] uppercase tracking-wider">
            Swipe to explore real app screens →
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 py-2">
            {showcaseTabs.map((tab) => (
              <div key={tab.id} className="snap-center shrink-0 w-[270px] sm:w-[300px] flex flex-col items-center">
                <PhoneMockup src={tab.src} alt={tab.title} className="w-full" />
                <div className="mt-4 text-center">
                  <h4 className="text-sm font-black text-[#171A18]">{tab.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{tab.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col items-center text-center">
            <AppStoreButtons layout="row" size="md" />
          </div>
        </div>
      </Container>
    </section>
  );
};
