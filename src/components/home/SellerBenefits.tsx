import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Store, TrendingUp, Award, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { PhoneMockup } from '../common/PhoneMockup';

export const SellerBenefits: React.FC = () => {
  const sellerPerks = [
    {
      title: 'Post Listings in Under 60 Seconds',
      description: 'Snap photos with your smartphone camera, set your price in GH₵, pick a category, and start receiving inquiries immediately.',
      icon: <Zap className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      title: 'Merchant Verification Badges',
      description: 'Build trust with Silver or Gold verified badges. Buyers prefer dealing with authenticated business profiles.',
      icon: <Award className="w-5 h-5 text-[#0C3229]" />,
    },
    {
      title: 'Hot Deals & Listing Boosts',
      description: 'Amplify product visibility with optional listing boosts to rank at the top of category feeds during rush hours.',
      icon: <TrendingUp className="w-5 h-5 text-[#D3B15F]" />,
    },
    {
      title: 'Dedicated Business Storefront',
      description: 'Showcase your entire inventory under your branded seller handle, complete with phone contacts and location.',
      icon: <Store className="w-5 h-5 text-[#0C3229]" />,
    },
  ];

  return (
    <section id="seller-benefits" className="py-20 bg-[#F7F6F2] border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="For Businesses & Merchants"
              title="Grow Your Sales, Reach Thousands of Daily Customers"
              subtitle="Whether you're selling a single laptop or managing a commercial electronics shop, Agape Mall accelerates your turnover."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {sellerPerks.map((perk, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] flex items-center justify-center border border-slate-200">
                    {perk.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#171A18]">{perk.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/sellers"
                className="inline-flex items-center gap-2 bg-[#0C3229] hover:bg-[#062019] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <span>Learn About Merchant Subscriptions</span>
                <ArrowRight className="w-4 h-4 text-[#D3B15F]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Real Seller Info Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup activeScreen="seller" className="w-[280px] sm:w-[310px]" />
          </div>
        </div>
      </Container>
    </section>
  );
};
