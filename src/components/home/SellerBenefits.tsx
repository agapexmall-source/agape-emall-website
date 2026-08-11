import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Store, TrendingUp, Award, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export const SellerBenefits: React.FC = () => {
  const sellerPerks = [
    {
      title: 'Post Listings in Under 60 Seconds',
      description: 'Snap photos with your smartphone camera, set your price in GH₵, pick a category, and start receiving inquiries immediately.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Merchant Verification Badges',
      description: 'Build trust with Silver or Gold verified badges. Buyers prefer dealing with authenticated business profiles.',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Hot Deals & Listing Boosts',
      description: 'Amplify product visibility with optional listing boosts to rank at the top of category feeds during rush hours.',
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Dedicated Business Storefront',
      description: 'Showcase your entire inventory under your branded seller handle, complete with phone contacts and location.',
      icon: <Store className="w-5 h-5 text-emerald-700" />,
    },
  ];

  return (
    <section id="seller-benefits" className="py-20 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="For Businesses & Individuals"
              title="Grow Your Sales, Reach Thousands of Daily Customers"
              subtitle="Whether you're selling a single laptop or managing a commercial electronics shop, Agape Mall accelerates your turnover."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {sellerPerks.map((perk, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {perk.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{perk.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/sellers"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
              >
                <span>Learn About Merchant Subscriptions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Summary Card Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
                <Store className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Merchant Pro Hub</h3>
                <p className="text-xs text-emerald-400 font-semibold">Zero Commission on Direct Deals</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Unlike traditional e-commerce platforms that deduct up to 15% from every sale, Agape Mall allows you to keep 100% of your earnings when you deal directly with buyers.
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Standard Postings</span>
                <span className="font-extrabold text-amber-400">Always 100% Free</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Direct Customer Leads</span>
                <span className="font-extrabold text-emerald-400">Unlimited Calls & Chat</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Store Verification Badge</span>
                <span className="font-extrabold text-white">Silver & Gold Tiers</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dedicated seller support team available 24/7.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
