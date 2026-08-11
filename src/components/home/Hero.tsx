import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Store, Users, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { PhoneMockup } from '../common/PhoneMockup';
import { QRCodeGenerator } from '../common/QRCodeGenerator';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative bg-slate-900 text-white pt-28 sm:pt-36 pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Decorator Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ghana's Official Agape Mall Web Portal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Buy & Sell Everything <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                Easily in Ghana
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              Connect directly with verified buyers and trusted sellers across Ghana. Browse smartphones, electronics, vehicles, real estate, fashion, and everyday goods on the Agape Mall mobile app.
            </p>

            {/* CTA Buttons & App Store Links */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-900/40 hover:scale-[1.02] transition-all duration-200"
                >
                  <span>Download Mobile App</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/sellers"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-base px-5 py-3.5 rounded-xl border border-slate-700 transition-all duration-200"
                >
                  <Store className="w-5 h-5 text-amber-400" />
                  <span>Start Selling Free</span>
                </Link>
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Available for iOS & Android
                </div>
                <AppStoreButtons layout="row" size="md" />
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 justify-center sm:justify-start">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Community</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">50K+</div>
                <div className="text-xs text-slate-400">Active Buyers</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 justify-center sm:justify-start">
                  <Store className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Merchants</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">10K+</div>
                <div className="text-xs text-slate-400">Verified Sellers</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-teal-400 justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Trust</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400">Direct Contact</div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive App Visual & QR */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative">
              <PhoneMockup activeScreen="home" />

              {/* Floating QR Code Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block z-20">
                <QRCodeGenerator size={100} />
              </div>

              {/* Floating Feature Chip */}
              <div className="absolute top-12 -right-6 hidden sm:flex items-center gap-2 bg-slate-800/95 border border-emerald-500/40 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md z-20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-left text-xs">
                  <div className="font-extrabold text-white">Zero Buyer Fees</div>
                  <div className="text-slate-400 text-[10px]">Chat directly on app</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
