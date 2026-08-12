import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { Target, HeartHandshake, ShieldCheck } from 'lucide-react';
import { AppStoreButtons } from '../components/common/AppStoreButtons';

export const About: React.FC = () => {
  return (
    <div id="about-page" className="pt-28 pb-20 bg-[#F7F6F2] min-h-screen">
      <Container>
        {/* Page Hero */}
        <div className="bg-[#0C3229] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden border border-[#D3B15F]/30">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-[#062019] text-[#D3B15F] text-xs font-extrabold uppercase tracking-wider rounded-full border border-[#D3B15F]/30">
              Our Vision & Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Empowering Everyday Commerce Across Ghana
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {companyConfig.brandName} was founded with a singular purpose: to remove friction from local trade, giving everyday buyers access to honest pricing and providing micro-enterprises with the tools to thrive.
            </p>
          </div>
        </div>

        {/* Core Values & Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F7F6F2] text-[#0C3229] flex items-center justify-center border border-slate-200">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#171A18]">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To build Ghana's most trustworthy, accessible, and user-friendly digital marketplace where anyone can securely trade goods and services with complete transparency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F7F6F2] text-[#D3B15F] flex items-center justify-center border border-slate-200">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#171A18]">Direct Connection</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate unnecessary middlemen and excessive commission markups, allowing buyers and sellers to connect, chat, and deal directly with total freedom.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F7F6F2] text-[#0C3229] flex items-center justify-center border border-slate-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#171A18]">Uncompromising Safety</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through merchant profile verification, account moderation, and clear safety guidance, we maintain a secure commerce environment across all 16 regions of Ghana.
            </p>
          </div>
        </div>

        {/* Corporate Legal Registration Information */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
          <SectionHeader
            badge="Corporate Transparency"
            title="Official Company Profile"
            subtitle="Registered under the laws of the Republic of Ghana"
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-4 bg-[#F7F6F2] rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Legal Business Entity
              </div>
              <div className="text-sm font-extrabold text-[#171A18]">{companyConfig.legalCompanyName}</div>
            </div>

            <div className="p-4 bg-[#F7F6F2] rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Company Registration No.
              </div>
              <div className="text-sm font-extrabold text-[#171A18]">{companyConfig.companyRegistrationNumber}</div>
            </div>

            <div className="p-4 bg-[#F7F6F2] rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Headquarters Address
              </div>
              <div className="text-sm font-extrabold text-[#171A18]">{companyConfig.businessAddress}</div>
            </div>

            <div className="p-4 bg-[#F7F6F2] rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Official Jurisdiction
              </div>
              <div className="text-sm font-extrabold text-[#171A18]">{companyConfig.jurisdiction}</div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between bg-[#0C3229] text-white p-6 rounded-2xl gap-4 border border-[#D3B15F]/30">
            <div>
              <div className="text-lg font-extrabold">Ready to explore the Agape e-Mall app?</div>
              <div className="text-xs text-slate-300">Download free today on iOS & Android.</div>
            </div>
            <AppStoreButtons layout="row" size="md" />
          </div>
        </div>
      </Container>
    </div>
  );
};
