import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Store, Users, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { QRCodeGenerator } from '../common/QRCodeGenerator';
import { PhoneMockup } from '../common/PhoneMockup';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative bg-[#0C3229] text-white pt-28 sm:pt-36 pb-20 overflow-hidden border-b border-[#D3B15F]/20">
      {/* Brand Background Glow Filters */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D3B15F]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#062019]/80 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062019] border border-[#D3B15F]/40 text-[#D3B15F] text-xs sm:text-sm font-extrabold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D3B15F]" />
              <span>Ghana's Official Agape Mall Web Portal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Buy & Sell Everything <br className="hidden sm:inline" />
              <span className="text-[#D3B15F]">
                Easily in Ghana
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Connect directly with verified buyers and trusted sellers across Ghana. Browse smartphones, electronics, vehicles, real estate, fashion, and everyday goods on the Agape Mall mobile app.
            </p>

            {/* CTA Buttons & App Store Links */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2.5 bg-[#D3B15F] hover:bg-[#CEAE66] text-[#062019] font-black text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#062019]/50 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <span>Download Mobile App</span>
                  <ArrowRight className="w-5 h-5 text-[#062019]" />
                </Link>
                <Link
                  to="/sellers"
                  className="inline-flex items-center gap-2 bg-[#062019] hover:bg-[#062019]/80 text-white hover:text-[#D3B15F] font-bold text-base px-5 py-3.5 rounded-xl border border-[#D3B15F]/30 transition-all duration-200"
                >
                  <Store className="w-5 h-5 text-[#D3B15F]" />
                  <span>Start Selling Free</span>
                </Link>
              </div>

              <div className="pt-2">
                <div className="text-xs font-bold text-[#D3B15F] uppercase tracking-wider mb-2">
                  Available for iOS & Android
                </div>
                <AppStoreButtons layout="row" size="md" />
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="pt-6 border-t border-[#D3B15F]/20 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D3B15F] justify-center sm:justify-start">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Community</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">50K+</div>
                <div className="text-xs text-slate-300">Active Buyers</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D3B15F] justify-center sm:justify-start">
                  <Store className="w-4 h-4" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Merchants</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">10K+</div>
                <div className="text-xs text-slate-300">Verified Sellers</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D3B15F] justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Trust</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-300">Direct Contact</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Phone Showcase of Real Mobile Screenshots */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[#D3B15F]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative w-full max-w-lg mx-auto min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
              {/* Secondary Screen Left: Hot Deals */}
              <div className="absolute left-0 sm:-left-4 top-8 sm:top-10 z-10 -rotate-6 scale-85 sm:scale-90 opacity-90 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-300 hidden xs:block">
                <PhoneMockup
                  activeScreen="hotdeals"
                  alt="Agape Mall Hot Deals"
                  className="w-[200px] sm:w-[240px]"
                />
              </div>

              {/* Main Primary Phone Center: Homepage */}
              <div className="relative z-20 scale-100 hover:scale-[1.02] transition-transform duration-300 drop-shadow-2xl">
                <PhoneMockup
                  activeScreen="home"
                  alt="Agape Mall App Homepage"
                  priority={true}
                  className="w-[260px] sm:w-[290px]"
                />

                {/* Floating Feature Badge */}
                <div className="absolute -top-4 -right-4 sm:-right-8 bg-[#062019] border border-[#D3B15F] text-white p-3 rounded-2xl shadow-xl z-30 flex items-center gap-2.5 backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 text-[#D3B15F] shrink-0" />
                  <div className="text-left text-xs">
                    <div className="font-extrabold text-white">Real Mobile App</div>
                    <div className="text-slate-300 text-[10px]">Ghana Marketplace</div>
                  </div>
                </div>
              </div>

              {/* Supporting Screen Right: Product Details */}
              <div className="absolute right-0 sm:-right-4 top-12 sm:top-14 z-10 rotate-6 scale-85 sm:scale-90 opacity-90 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-300 hidden xs:block">
                <PhoneMockup
                  activeScreen="details"
                  alt="Agape Mall Product Details Page"
                  className="w-[200px] sm:w-[240px]"
                />
              </div>

              {/* Floating QR Code Badge on Desktop */}
              <div className="absolute -bottom-6 -left-2 hidden xl:block z-30">
                <QRCodeGenerator size={110} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
