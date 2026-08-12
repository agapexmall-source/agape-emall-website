import React from 'react';
import { Container } from '../common/Container';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { QRCodeGenerator } from '../common/QRCodeGenerator';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-20 bg-[#062019] text-white relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D3B15F]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C3229] rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="bg-[#0C3229] border border-[#D3B15F]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062019] border border-[#D3B15F]/30 text-[#D3B15F] text-xs font-bold">
                <Sparkles className="w-4 h-4 text-[#D3B15F]" />
                <span>Join Over 60,000 Users Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Experience <br />
                <span className="text-[#D3B15F]">Agape e-Mall</span> on Your Phone?
              </h2>

              <p className="text-base text-slate-200 max-w-xl leading-relaxed">
                Download the free app now to start browsing local items, chatting with verified merchants, or turning your own goods into cash across Ghana.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <AppStoreButtons layout="row" size="lg" />
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#D3B15F]" />
                <span>100% Free Download • Lightweight App • iOS & Android Compatible</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <QRCodeGenerator size={140} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
