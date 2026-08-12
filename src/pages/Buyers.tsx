import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { BuyerBenefits } from '../components/home/BuyerBenefits';
import { AppStoreButtons } from '../components/common/AppStoreButtons';
import { PhoneMockup } from '../components/common/PhoneMockup';

export const Buyers: React.FC = () => {
  return (
    <div id="buyers-page" className="pt-28 pb-20 bg-[#F7F6F2] min-h-screen">
      <Container>
        <div className="bg-[#0C3229] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-[#D3B15F]/30 space-y-4">
          <span className="inline-block px-3 py-1 bg-[#062019] text-[#D3B15F] text-xs font-extrabold uppercase tracking-wider rounded-full border border-[#D3B15F]/30">
            For Smart Shoppers
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            The Best Deals in Ghana, Right at Your Fingertips
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Discover thousands of smartphones, vehicles, electronics, fashion items, and apartments. Chat directly with sellers and pay safely after inspection.
          </p>
          <div className="pt-2">
            <AppStoreButtons layout="row" size="lg" />
          </div>
        </div>

        {/* Real App Screenshot Preview Grid */}
        <div className="mb-16">
          <SectionHeader
            badge="Buyer Guide"
            title="How to Shop Safely on Agape e-Mall"
            subtitle="Follow these 4 simple steps to enjoy seamless, stress-free transactions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Search & Compare',
                desc: 'Use category filters, price range sliders, and city selectors to locate exact items nearby.',
              },
              {
                step: '02',
                title: 'Make an Offer',
                desc: 'Tap "Make an Offer" or message the seller directly in-app to negotiate fair terms.',
              },
              {
                step: '03',
                title: 'Arrange Meeting',
                desc: 'Agree on a well-lit, busy public location (e.g. shopping mall or bank hall) for product inspection.',
              },
              {
                step: '04',
                title: 'Inspect & Pay',
                desc: 'Test the device or inspect condition thoroughly in person before handing over money.',
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="text-2xl font-black text-[#D3B15F]">{card.step}</div>
                <h3 className="text-lg font-bold text-[#171A18]">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <BuyerBenefits />
    </div>
  );
};
