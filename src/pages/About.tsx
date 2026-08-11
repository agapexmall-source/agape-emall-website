import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { ShoppingBag, Target, HeartHandshake, ShieldCheck, MapPin, Users } from 'lucide-react';
import { AppStoreButtons } from '../components/common/AppStoreButtons';

export const About: React.FC = () => {
  return (
    <div id="about-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        {/* Page Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-950 text-emerald-300 text-xs font-extrabold uppercase tracking-wider rounded-full border border-emerald-500/30">
              Our Vision & Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Empowering Everyday Commerce Across Ghana
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {companyConfig.brandName} was founded with a singular purpose: to remove friction from local trade, giving everyday buyers access to honest pricing and providing micro-enterprises with the tools to thrive.
            </p>
          </div>
        </div>

        {/* Core Values & Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To build Ghana's most trustworthy, accessible, and user-friendly digital marketplace where anyone can securely trade goods and services with complete transparency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Direct Connection</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate unnecessary middlemen and excessive commission markups, allowing buyers and sellers to connect, chat, and deal directly with total freedom.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Uncompromising Safety</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through merchant profile verification, account moderation, and clear safety guidance, we maintain a secure commerce environment across all 16 regions of Ghana.
            </p>
          </div>
        </div>

        {/* Corporate Legal Registration Information */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <SectionHeader
            badge="Corporate Transparency"
            title="Official Company Profile"
            subtitle="Registered under the laws of the Republic of Ghana"
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Legal Business Entity
              </div>
              <div className="text-sm font-extrabold text-slate-900">{companyConfig.legalCompanyName}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Company Registration No.
              </div>
              <div className="text-sm font-extrabold text-slate-900">{companyConfig.companyRegistrationNumber}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Headquarters Address
              </div>
              <div className="text-sm font-extrabold text-slate-900">{companyConfig.businessAddress}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Official Jurisdiction
              </div>
              <div className="text-sm font-extrabold text-slate-900">{companyConfig.jurisdiction}</div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between bg-emerald-900 text-white p-6 rounded-2xl gap-4">
            <div>
              <div className="text-lg font-extrabold">Ready to explore the Agape Mall app?</div>
              <div className="text-xs text-emerald-200">Download free today on iOS & Android.</div>
            </div>
            <AppStoreButtons layout="row" size="md" />
          </div>
        </div>
      </Container>
    </div>
  );
};
