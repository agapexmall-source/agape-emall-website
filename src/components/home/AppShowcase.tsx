import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { PhoneMockup } from '../common/PhoneMockup';
import { QRCodeGenerator } from '../common/QRCodeGenerator';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { Smartphone, MessageSquare, PlusCircle, ShieldCheck } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'listing'>('home');

  return (
    <section id="app-showcase" className="py-20 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeader
          badge="Interactive Preview"
          title="Experience the Mobile App Firsthand"
          subtitle="Designed for maximum speed, intuitive search, and instant communication on any iOS or Android smartphone."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Feature Tabs */}
          <div className="lg:col-span-6 space-y-4">
            <div
              onClick={() => setActiveTab('home')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-slate-100/80 border-slate-200 hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">1. Instant Feed & Search</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Filter thousands of product listings by price range, region, city, or brand with zero lag.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('listing')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'listing'
                  ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-slate-100/80 border-slate-200 hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">2. Rich Item Details & Pricing</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    View verified seller badges, high-resolution product photos, seller specs, and instant call/chat buttons.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900">Ready to start buying or selling?</h3>
              </div>
              <AppStoreButtons layout="row" size="md" />
            </div>
          </div>

          {/* Right Mobile Phone View & QR */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <PhoneMockup activeScreen={activeTab} />
            <div className="shrink-0">
              <QRCodeGenerator size={120} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
