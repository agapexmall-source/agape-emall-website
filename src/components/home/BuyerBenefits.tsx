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
      icon: <Tag className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Make an Offer & Bargain Directly',
      description: 'Propose your preferred price directly inside the mobile app to get maximum value on every purchase.',
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Location-Based Nearby Discovery',
      description: 'Filter listings by town, city, or neighborhood (e.g. Osu, Spintex, East Legon, Adum) to buy close to home.',
      icon: <Search className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Community Safety & Fraud Protection',
      description: 'Clear safety alerts, report fraudulent listings with one tap, and shop with verified seller profiles.',
      icon: <ShieldAlert className="w-5 h-5 text-emerald-700" />,
    },
  ];

  return (
    <section id="buyer-benefits" className="py-20 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <PhoneMockup activeScreen="listing" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeader
              badge="For Smart Shoppers"
              title="Shop Smarter, Save Bigger Across Ghana"
              subtitle="Agape Mall provides a seamless shopping experience with zero middleman markups."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {buyerFeatures.map((feature, idx) => (
                <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-white">{feature.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-emerald-300 font-semibold">
              <span className="flex items-center gap-1.5 bg-emerald-950/90 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <Check className="w-4 h-4 text-amber-400" /> 100% Free for Buyers
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-950/90 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <Check className="w-4 h-4 text-amber-400" /> Direct Seller Contact
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
