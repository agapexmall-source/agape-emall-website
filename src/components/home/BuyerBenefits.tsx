import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { PhoneMockup } from '../common/PhoneMockup';
import { Check, Search, ShieldAlert, Sparkles, Tag } from 'lucide-react';

export const BuyerBenefits: React.FC = () => {
  const buyerFeatures = [
    {
      title: 'Massive Variety Across 13 Categories',
      description: 'Find everything from the latest smartphones and laptops to affordable housing, vehicles, and daily fashion.',
      icon: <Tag className="w-5 h-5 text-[#0C3229]" />,
    },
    {
      title: 'Make an Offer & Bargain Directly',
      description: 'Propose your preferred price directly inside the mobile app to get maximum value on every purchase.',
      icon: <Sparkles className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      title: 'Location-Based Nearby Discovery',
      description: 'Filter listings by town, city, or neighborhood (e.g. Osu, Spintex, East Legon, Adum) to buy close to home.',
      icon: <Search className="w-5 h-5 text-[#0C3229]" />,
    },
    {
      title: 'Community Safety & Anti-Fraud Tips',
      description: 'Clear safety alerts, report fraudulent listings with one tap, and shop with verified seller profiles.',
      icon: <ShieldAlert className="w-5 h-5 text-[#D3B15F]" />,
    },
  ];

  return (
    <section
      id="buyer-benefits"
      className="overflow-hidden border-b border-slate-200 bg-white py-20 text-[#171A18]"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Visual Column with Real Mobile Screenshot */}
          <div className="order-2 flex justify-center lg:order-1 lg:col-span-5">
            <div className="relative">
              <div className="pointer-events-none absolute inset-10 rounded-full bg-[#D3B15F]/14 blur-3xl" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0C3229]/8" />
              <PhoneMockup
                activeScreen="hotdeals"
                className="relative z-10 w-[280px] drop-shadow-xl sm:w-[310px]"
              />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            <SectionHeader
              badge="For Smart Shoppers"
              title="Shop Smarter, Save Bigger Across Ghana"
              subtitle="Agape e-Mall provides a seamless shopping experience with zero middleman markups."
              centered={false}
            />

            <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
              {buyerFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="space-y-3 rounded-2xl border border-slate-200 bg-[#F7F6F2] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D3B15F]/60 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D3B15F]/25 bg-white shadow-xs">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#171A18]">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 pt-4 text-xs font-semibold text-[#0C3229] sm:flex-row sm:items-center">
              <span className="flex items-center gap-1.5 rounded-lg border border-[#0C3229]/10 bg-[#0C3229]/6 px-3 py-1.5">
                <Check className="w-4 h-4 text-[#0C3229]" /> 100% Free for Buyers
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-[#D3B15F]/35 bg-[#D3B15F]/10 px-3 py-1.5">
                <Check className="w-4 h-4 text-[#B38F3E]" /> Direct Seller Contact
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
