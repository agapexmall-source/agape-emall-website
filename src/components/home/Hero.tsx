import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from 'lucide-react';
import { Container } from '../common/Container';
import { AppStoreButtons } from '../common/AppStoreButtons';
import { PhoneMockup } from '../common/PhoneMockup';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden border-b border-[#D3B15F]/25 bg-[linear-gradient(135deg,#F7F6F2_0%,#FFFFFF_62%,#F6EEDB_100%)] pb-20 pt-28 text-[#171A18] sm:pt-36"
    >
      <div className="pointer-events-none absolute left-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-[#D3B15F]/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-190px] right-[-100px] h-[520px] w-[520px] rounded-full bg-[#0C3229]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[18%] top-16 h-44 w-44 rounded-full border border-[#D3B15F]/15" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 text-left lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D3B15F]/45 bg-white/85 px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-[#0C3229] shadow-sm backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-4 w-4 text-[#D3B15F]" />
              <span>Ghana&apos;s Official Agape e-Mall Web Portal</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#171A18] sm:text-5xl lg:text-6xl">
              Buy &amp; Sell Everything
              <br className="hidden sm:block" />
              <span className="text-[#0C3229]"> Easily in Ghana</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-xl">
              Connect directly with verified buyers and trusted sellers across
              Ghana. Browse smartphones, electronics, vehicles, real estate,
              fashion, and everyday goods on the Agape e-Mall mobile app.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#0C3229] px-6 py-3.5 text-base font-black text-white shadow-lg transition-all duration-200 hover:bg-[#062019] hover:shadow-xl"
                >
                  <span>Download Mobile App</span>
                  <ArrowRight className="h-5 w-5 text-[#D3B15F]" />
                </Link>

                <Link
                  to="/sellers"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D3B15F]/60 bg-white/90 px-5 py-3.5 text-base font-bold text-[#0C3229] shadow-sm transition-all duration-200 hover:border-[#0C3229]/35 hover:bg-white hover:shadow-md"
                >
                  <Store className="h-5 w-5 text-[#D3B15F]" />
                  <span>Start Selling Free</span>
                </Link>
              </div>

              <div className="pt-2">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#0C3229]">
                  Available for iOS &amp; Android
                </div>

                <AppStoreButtons layout="row" size="md" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200/90 pt-6 text-center sm:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-[#0C3229] sm:justify-start">
                  <Users className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider sm:text-xs">
                    Community
                  </span>
                </div>

                <div className="text-xl font-black text-[#171A18] sm:text-2xl">
                  50K+
                </div>

                <div className="text-xs text-slate-500">
                  Active Buyers
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-[#D3B15F] sm:justify-start">
                  <Store className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#806724] sm:text-xs">
                    Merchants
                  </span>
                </div>

                <div className="text-xl font-black text-[#171A18] sm:text-2xl">
                  10K+
                </div>

                <div className="text-xs text-slate-500">
                  Verified Sellers
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-[#0C3229] sm:justify-start">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider sm:text-xs">
                    Trust
                  </span>
                </div>

                <div className="text-xl font-black text-[#171A18] sm:text-2xl">
                  100%
                </div>

                <div className="text-xs text-slate-500">
                  Direct Contact
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="pointer-events-none absolute h-[440px] w-[440px] rounded-full bg-[#D3B15F]/14 blur-3xl" />
            <div className="pointer-events-none absolute h-[340px] w-[340px] rounded-full border border-[#0C3229]/8 bg-white/35" />

            <div className="relative mx-auto flex min-h-[550px] w-full max-w-[560px] items-center justify-center sm:min-h-[610px]">
              <div className="absolute left-0 top-24 z-10 hidden w-[175px] -rotate-2 opacity-75 xl:block">
                <PhoneMockup
                  activeScreen="hotdeals"
                  alt="Agape e-Mall Hot Deals screen"
                  className="w-full"
                />
              </div>

              <div className="relative z-20 w-[245px] drop-shadow-2xl sm:w-[285px] lg:w-[300px]">
                <PhoneMockup
                  activeScreen="home"
                  alt="Agape e-Mall app homepage"
                  priority
                  className="w-full"
                />
              </div>

              <div className="absolute right-0 top-32 z-10 hidden w-[175px] rotate-2 opacity-75 xl:block">
                <PhoneMockup
                  activeScreen="details"
                  alt="Agape e-Mall product details screen"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
