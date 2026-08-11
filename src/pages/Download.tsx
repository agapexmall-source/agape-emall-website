import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { AppStoreButtons } from '../components/common/AppStoreButtons';
import { QRCodeGenerator } from '../components/common/QRCodeGenerator';
import { PhoneMockup } from '../components/common/PhoneMockup';
import { companyConfig } from '../config/company';
import { ShieldCheck, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';

export const Download: React.FC = () => {
  return (
    <div id="download-page" className="pt-28 pb-20 bg-slate-900 text-white min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" /> Official Download Portal
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Download the Official <br />
            <span className="text-emerald-400">Agape Mall</span> Mobile App
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get instant access to thousands of listings across Ghana. Available free on Android smartphones via Google Play and iPhone/iPad via Apple App Store.
          </p>

          <div className="pt-4 flex justify-center">
            <AppStoreButtons layout="row" size="lg" />
          </div>
        </div>

        {/* QR Code & Phone Visual Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto bg-slate-800/90 p-8 sm:p-12 rounded-3xl border border-slate-700/80 shadow-2xl mb-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <QRCodeGenerator size={160} />
            <div className="space-y-1">
              <div className="text-sm font-extrabold text-white">Scan with Phone Camera</div>
              <p className="text-xs text-slate-400 max-w-xs">
                Point your mobile device camera at the QR code above to instantly open the store link.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMockup activeScreen="home" />
          </div>
        </div>

        {/* System Compatibility Requirements */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Android Devices</div>
            <div className="text-sm font-extrabold text-white">Android 7.0 or Higher</div>
            <p className="text-xs text-slate-400">Optimized for Samsung, Tecno, Infinix, Xiaomi, and Huawei phones.</p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Apple iOS Devices</div>
            <div className="text-sm font-extrabold text-white">iOS 13.0 or Higher</div>
            <p className="text-xs text-slate-400">Compatible with iPhone SE, iPhone 8 through iPhone 16 series & iPads.</p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">Storage & Data</div>
            <div className="text-sm font-extrabold text-white">Lightweight (~25 MB)</div>
            <p className="text-xs text-slate-400">Low bandwidth usage, instant load times on 3G, 4G, and 5G networks.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
