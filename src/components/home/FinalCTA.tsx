import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { QRCodeGenerator } from '../common/QRCodeGenerator';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Join Over 60,000 Users Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Experience <br />
                <span className="text-emerald-400">Agape Mall</span> on Your Phone?
              </h2>

              <p className="text-base text-slate-300 max-w-xl leading-relaxed">
                Download the free app now to start browsing local items, chatting with verified merchants, or turning your own goods into cash across Ghana.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <AppStoreButtons layout="row" size="lg" />
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
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
