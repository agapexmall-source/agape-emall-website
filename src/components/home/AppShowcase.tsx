import React, { useState } from 'react';
import {
  Flame,
  ShoppingBag,
  Smartphone,
  Store,
  Tag,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { PhoneMockup } from '../common/PhoneMockup';
import { AppStoreButtons } from '../common/AppStoreButtons';

type ShowcaseId =
  | 'home'
  | 'hotdeals'
  | 'productlisting'
  | 'details'
  | 'seller';

interface ShowcaseTab {
  id: ShowcaseId;
  title: string;
  subtitle: string;
  src: string;
  icon: LucideIcon;
}

const showcaseTabs: ShowcaseTab[] = [
  {
    id: 'home',
    title: 'App Homepage & Categories',
    subtitle:
      'Branded green search header, quick category navigation, and top featured deals.',
    src: '/screenshots/homepage.jpeg',
    icon: Smartphone,
  },
  {
    id: 'hotdeals',
    title: 'Live Hot Deals Feed',
    subtitle:
      'Verified discounted items with live countdown timers and deal filters.',
    src: '/screenshots/hotdeals.jpeg',
    icon: Flame,
  },
  {
    id: 'productlisting',
    title: 'Marketplace Product Feed',
    subtitle:
      'Featured vehicles, laptops, fashion, and daily essentials across Ghana.',
    src: '/screenshots/productlisting.jpeg',
    icon: ShoppingBag,
  },
  {
    id: 'details',
    title: 'Rich Product Page & Offers',
    subtitle:
      'Direct in-app Chat, Call merchant buttons, and instant "Make an offer".',
    src: '/screenshots/details_page.jpeg',
    icon: Tag,
  },
  {
    id: 'seller',
    title: 'Verified Merchant Profiles',
    subtitle:
      'Silver & Gold seller badges, store addresses, ratings, and active listings.',
    src: '/screenshots/seller_info.jpeg',
    icon: Store,
  },
];

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<ShowcaseId>('home');

  const selectedTab =
    showcaseTabs.find((tab) => tab.id === activeTab) ??
    showcaseTabs[0];

  return (
    <section
      id="app-showcase"
      className="border-b border-slate-200 bg-white py-20"
    >
      <Container>
        <SectionHeader
          badge="Real App Screenshots"
          title="Experience Agape e-Mall in Your Pocket"
          subtitle="Designed for maximum speed, intuitive search, and instant buyer-seller communication on any smartphone."
        />

        <div className="hidden items-center gap-12 lg:grid lg:grid-cols-12">
          <div className="col-span-6 space-y-3">
            {showcaseTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all ${
                    isSelected
                      ? 'border-[#0C3229] bg-[#F7F6F2] shadow-sm ring-1 ring-[#0C3229]/10'
                      : 'border-slate-200 bg-white hover:border-[#D3B15F]/50 hover:bg-[#F7F6F2]/50'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isSelected
                          ? 'bg-[#0C3229]'
                          : 'bg-slate-100'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isSelected
                            ? 'text-[#D3B15F]'
                            : 'text-[#0C3229]'
                        }`}
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-[#171A18]">
                        {tab.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-[#D3B15F]/30 bg-[#062019] p-5 text-white">
              <div>
                <div className="text-xs font-bold text-[#D3B15F]">
                  Ready to Start Shopping?
                </div>

                <p className="text-[11px] text-slate-300">
                  Download free on iOS or Android.
                </p>
              </div>

              <AppStoreButtons
                layout="row"
                size="sm"
              />
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="relative w-[290px]">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-[#D3B15F]/10 blur-3xl" />

              <PhoneMockup
                src={selectedTab.src}
                alt={selectedTab.title}
                className="relative z-10 w-full"
              />

              <div className="mt-5 text-center">
                <div className="text-sm font-extrabold text-[#0C3229]">
                  {selectedTab.title}
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Actual Agape e-Mall mobile app screen
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-7 lg:hidden">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-[#0C3229]">
            Swipe to explore real app screens →
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:mx-0 sm:px-0">
            {showcaseTabs.map((tab) => (
              <article
                key={tab.id}
                className="w-[250px] shrink-0 snap-center sm:w-[285px]"
              >
                <PhoneMockup
                  src={tab.src}
                  alt={tab.title}
                  className="w-full"
                />

                <div className="mt-4 px-1 text-center">
                  <h4 className="text-sm font-black text-[#171A18]">
                    {tab.title}
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {tab.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center pt-1">
            <AppStoreButtons
              layout="row"
              size="md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};