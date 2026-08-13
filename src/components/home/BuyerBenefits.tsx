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
      icon: <Tag className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      title: 'Make an Offer & Bargain Directly',
      description: 'Propose your preferred price directly inside the mobile app to get maximum value on every purchase.',
      icon: <Sparkles className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      title: 'Location-Based Nearby Discovery',
      description: 'Filter listings by town, city, or neighborhood (e.g. Osu, Spintex, East Legon, Adum) to buy close to home.',
      icon: <Search className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      title: 'Community Safety & Anti-Fraud Tips',
      description: 'Clear safety alerts, report fraudulent listings with one tap, and shop with verified seller profiles.',
      icon: <ShieldAlert className="w-5 h-5 text-[#D3B15F]" />,
    },
  ];

  return (
    <section id="buyer-benefits" className="py-20 bg-[#0C3229] text-white border-b border-[#D3B15F]/20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column with Real Mobile Screenshot */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <PhoneMockup activeScreen="hotdeals" className="w-[280px] sm:w-[310px]" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeader
              badge="For Smart Shoppers"
              title="Shop Smarter, Save Bigger Across Ghana"
              subtitle="Agape e-Mall provides a seamless shopping experience with zero middleman markups."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {buyerFeatures.map((feature, idx) => (
                <div key={idx} className="bg-[#062019] p-5 rounded-2xl border border-[#D3B15F]/30 space-y-3 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#0C3229] flex items-center justify-center border border-[#D3B15F]/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-white">{feature.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#D3B15F] font-semibold">
              <span className="flex items-center gap-1.5 bg-[#062019] px-3 py-1.5 rounded-lg border border-[#D3B15F]/30">
                <Check className="w-4 h-4 text-[#D3B15F]" /> 100% Free for Buyers
              </span>
              <span className="flex items-center gap-1.5 bg-[#062019] px-3 py-1.5 rounded-lg border border-[#D3B15F]/30">
                <Check className="w-4 h-4 text-[#D3B15F]" /> Direct Seller Contact
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
