import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { SellerBenefits } from '../components/home/SellerBenefits';
import { AppStoreButtons } from '../components/common/AppStoreButtons';
import { Store, Award, TrendingUp, Check, ShieldCheck, Sparkles } from 'lucide-react';

export const Sellers: React.FC = () => {
  return (
    <div id="sellers-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-slate-800 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-950 text-amber-300 text-xs font-extrabold uppercase tracking-wider rounded-full border border-amber-500/30">
            For Merchants & Sellers
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Turn Your Products Into Cash with Zero Platform Commissions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Reach active buyers daily across Ghana. Create your free storefront, upload unlimited product photos, and receive direct phone calls and in-app chats.
          </p>
          <div className="pt-2">
            <AppStoreButtons layout="row" size="lg" />
          </div>
        </div>

        {/* Merchant Subscription Packages Section */}
        <div className="mb-16">
          <SectionHeader
            badge="Growth Packages"
            title="Merchant Subscription Tiers & Verification"
            subtitle="Upgrade your seller profile to build instant customer trust and maximize sales velocity."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Free */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Free Forever</div>
                <h3 className="text-2xl font-extrabold text-slate-900">Standard Seller</h3>
                <div className="text-3xl font-black text-slate-900">
                  GH₵ 0 <span className="text-xs text-slate-500 font-normal">/ month</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal for individuals selling personal items, used phones, or household electronics.
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Standard Listing Cap
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Direct Customer Phone Calls
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> In-App Messaging
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <div className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-xl text-xs transition-colors">
                  Available in Free App
                </div>
              </div>
            </div>

            {/* Silver Verified Pro */}
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-500 shadow-md space-y-6 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-sm">
                Most Popular for Shops
              </div>

              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Pro Merchant</div>
                <h3 className="text-2xl font-extrabold text-slate-900">Silver Verified Store</h3>
                <div className="text-3xl font-black text-emerald-700">
                  GH₵ 120 <span className="text-xs text-slate-500 font-normal">/ month</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For active retail shops, phone vendors, and fashion boutiques wanting verified status.
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Silver Verified Badge on Profile
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> 5x Higher Listing Limit
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Branded Digital Storefront Link
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Priority Feed Ranking
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <div className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition-colors">
                  Subscribe in App Settings
                </div>
              </div>
            </div>

            {/* Gold Ultimate VIP */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Ultimate Business</div>
                <h3 className="text-2xl font-extrabold text-white">Gold VIP Enterprise</h3>
                <div className="text-3xl font-black text-amber-400">
                  GH₵ 280 <span className="text-xs text-slate-400 font-normal">/ month</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For car dealerships, real estate agencies, and major electronics distributors.
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" /> Gold VIP Verified Badge
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" /> Unlimited Active Listings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" /> Monthly Hot Deals Boost Credits
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" /> Dedicated Account Manager
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <div className="w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold py-3 rounded-xl text-xs transition-colors">
                  Contact Merchant Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <SellerBenefits />
    </div>
  );
};
