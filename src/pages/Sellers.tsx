import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { SellerBenefits } from '../components/home/SellerBenefits';
import { AppStoreButtons } from '../components/common/AppStoreButtons';
import { Check } from 'lucide-react';

export const Sellers: React.FC = () => {
  const subscriptionPackages = [
    {
      id: 'ivory',
      name: 'Ivory Package',
      price: 'GH₵ 500',
      period: '/ month',
      description: 'Ideal for small merchants expanding their reach with guaranteed boosted listings.',
      popular: false,
      badgeText: 'Ivory Tier',
      features: [
        '50 Boosted Ads per month',
        'Unlimited Product Listings',
        'Ivory Verified Merchant Badge',
        'Seller Dashboard & Analytics',
        'Direct Calls & In-App Chat',
      ],
      bgStyle: 'bg-white border-slate-200 text-slate-900',
      badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300',
      priceStyle: 'text-[#0C3229]',
      btnStyle: 'bg-[#0C3229] hover:bg-[#062019] text-white',
    },
    {
      id: 'silver',
      name: 'Silver Package',
      price: 'GH₵ 800',
      period: '/ month',
      description: 'Great for growing shops wanting high visibility and continuous ad boosts.',
      popular: false,
      badgeText: 'Silver Tier',
      features: [
        '100 Boosted Ads per month',
        'Unlimited Product Listings',
        'Silver Verified Merchant Badge',
        'Advanced Sales Analytics',
        'Priority Search Results',
      ],
      bgStyle: 'bg-white border-slate-200 text-slate-900',
      badgeStyle: 'bg-slate-200 text-slate-800 border-slate-400',
      priceStyle: 'text-[#0C3229]',
      btnStyle: 'bg-[#0C3229] hover:bg-[#062019] text-white',
    },
    {
      id: 'gold',
      name: 'Gold Package',
      price: 'GH₵ 1,500',
      period: '/ month',
      description: 'The preferred choice for established merchants and busy commercial sellers.',
      popular: true,
      badgeText: 'Most Popular',
      features: [
        '300 Boosted Ads per month',
        'Unlimited Product Listings',
        'Gold VIP Verified Badge',
        'Full Analytics & Trends',
        'Top Feed Ranking & Banner Exposure',
      ],
      bgStyle: 'bg-[#062019] border-[#D3B15F]/50 text-white shadow-2xl relative',
      badgeStyle: 'bg-[#D3B15F] text-[#062019] font-black',
      priceStyle: 'text-[#D3B15F]',
      btnStyle: 'bg-[#D3B15F] hover:bg-[#c4a250] text-[#062019] font-black',
    },
    {
      id: 'platinum',
      name: 'Platinum Package',
      price: 'GH₵ 2,000',
      period: '/ month',
      description: 'Maximum sales velocity for enterprise brands, distributors, and major retailers.',
      popular: false,
      badgeText: 'Platinum Tier',
      features: [
        '500 Boosted Ads per month',
        'Unlimited Product Listings',
        'Platinum VIP Merchant Badge',
        'Full Enterprise Analytics Suite',
        'Dedicated Merchant Account Manager',
      ],
      bgStyle: 'bg-white border-slate-200 text-slate-900',
      badgeStyle: 'bg-[#062019] text-[#D3B15F] border-[#D3B15F]/30',
      priceStyle: 'text-[#0C3229]',
      btnStyle: 'bg-[#0C3229] hover:bg-[#062019] text-white',
    },
  ];

  return (
    <div id="sellers-page" className="pt-28 pb-20 bg-[#F7F6F2] min-h-screen">
      <Container>
        <div className="bg-[#0C3229] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-[#D3B15F]/30 space-y-4">
          <span className="inline-block px-3 py-1 bg-[#062019] text-[#D3B15F] text-xs font-extrabold uppercase tracking-wider rounded-full border border-[#D3B15F]/30">
            For Merchants & Sellers
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Turn Your Products Into Cash with Zero Platform Commissions
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Reach active buyers daily across Ghana on Agape e-Mall. Create your storefront, upload unlimited product photos, and receive direct phone calls and in-app chats.
          </p>
          <div className="pt-2">
            <AppStoreButtons layout="row" size="lg" />
          </div>
        </div>

        {/* Merchant Subscription Packages Section */}
        <div className="mb-16">
          <SectionHeader
            badge="Growth Packages"
            title="Merchant Subscription Packages"
            subtitle="Choose the subscription tier that fits your business scale and boost your sales across Ghana."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 rounded-3xl border shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-lg ${pkg.bgStyle}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D3B15F] text-[#062019] text-[11px] font-black uppercase px-3.5 py-1 rounded-full shadow-md border border-[#062019]/20 tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pkg.badgeStyle}`}>
                      {pkg.badgeText}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight">{pkg.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className={`text-3xl font-black tracking-tight ${pkg.priceStyle}`}>{pkg.price}</span>
                      <span className="text-xs opacity-75 font-medium">{pkg.period}</span>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed opacity-85 min-h-[36px]">{pkg.description}</p>

                  <ul className="space-y-2.5 pt-4 border-t border-current/10 text-xs">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-[#D3B15F]' : 'text-[#0C3229]'}`} />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to="/download"
                    className={`block w-full text-center font-bold py-3 px-4 rounded-xl text-xs transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] ${pkg.btnStyle}`}
                  >
                    Subscribe in Mobile App
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <SellerBenefits />
    </div>
  );
};
