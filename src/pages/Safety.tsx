import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyConfig } from '../config/company';
import { ShieldAlert, CheckCircle2, Lock, AlertTriangle, Eye, Phone } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <div id="safety-page" className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-slate-800 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-950 text-amber-300 text-xs font-extrabold uppercase tracking-wider rounded-full border border-amber-500/30">
            Safety & Fraud Prevention
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Your Safety is Our Top Priority
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Agape e-Mall is committed to maintaining a safe, transparent, and authentic marketplace. Review these essential security rules before buying or selling.
          </p>
        </div>

        {/* 4 Golden Rules of Safety */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-500 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Always Inspect Item Before Payment</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never send advance wire transfers, mobile money deposits, or gift cards prior to receiving and physically inspecting the product in person.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-500 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Meet in Busy Public Locations</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Choose safe meeting places during daylight hours such as shopping centers, bank lobbies, police station precincts, or major fuel stations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-500 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Keep OTP Codes & Passwords Private</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Agape e-Mall staff will NEVER call or text asking for your SMS verification code, mobile money PIN, or password. Keep them strictly confidential.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-500 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Report Suspicious Activity Immediately</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              If a seller refuses in-person inspection, demands unusual payment methods, or behaves suspiciously, tap "Report Listing" in the app immediately.
            </p>
          </div>
        </div>

        {/* Reporting Fraud Box */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" /> Need to Report a Fraudulent Seller?
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              Our safety and moderation team reviews reports 24/7 and permanently bans fraudulent accounts. You can email us directly with evidence at {companyConfig.supportEmail}.
            </p>
          </div>
          <a
            href={`mailto:${companyConfig.supportEmail}?subject=Fraud%20Report`}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-colors shrink-0"
          >
            Submit Fraud Report
          </a>
        </div>
      </Container>
    </div>
  );
};
