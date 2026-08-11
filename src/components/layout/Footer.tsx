import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { companyConfig } from '../../config/company';

export const Footer: React.FC = () => {
  return (
    <footer id="agape-main-footer" className="bg-[#062019] text-slate-300 pt-16 pb-12 border-t border-[#D3B15F]/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D3B15F]/20">
          {/* Official Brand Logo & Information */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="p-1.5 rounded-2xl bg-[#0C3229] border border-[#D3B15F]/40 shadow-sm inline-flex items-center group-hover:border-[#D3B15F] transition-all">
                <img
                  src="/logo.png"
                  alt="AGAPE e-MALL Logo"
                  className="h-12 w-auto object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Agape Mall empowers buyers to discover great local deals and gives sellers direct access to thousands of daily active customers across Ghana.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3B15F] shrink-0" />
                <span>{companyConfig.businessAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D3B15F] shrink-0" />
                <span>{companyConfig.businessPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D3B15F] shrink-0" />
                <span>{companyConfig.businessEmail}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-extrabold text-[#D3B15F] uppercase tracking-wider mb-4 border-b border-[#D3B15F]/20 pb-2">
              Marketplace
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#D3B15F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D3B15F] transition-colors">
                  About Agape Mall
                </Link>
              </li>
              <li>
                <Link to="/buyers" className="hover:text-[#D3B15F] transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="hover:text-[#D3B15F] transition-colors">
                  For Sellers & Merchants
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-[#D3B15F] transition-colors">
                  Download Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-xs font-extrabold text-[#D3B15F] uppercase tracking-wider mb-4 border-b border-[#D3B15F]/20 pb-2">
              Support & Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/support" className="hover:text-[#D3B15F] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D3B15F] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-[#D3B15F] transition-colors">
                  Safety & Anti-Fraud Tips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D3B15F] transition-colors">
                  Contact Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Account */}
          <div>
            <h3 className="text-xs font-extrabold text-[#D3B15F] uppercase tracking-wider mb-4 border-b border-[#D3B15F]/20 pb-2">
              Legal & Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-[#D3B15F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#D3B15F] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/account-deletion" className="hover:text-[#D3B15F] transition-colors">
                  Account Deletion Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D3B15F]" />
            <span>
              © {new Date().getFullYear()} {companyConfig.legalCompanyName}. All rights reserved. Registered under Reg. No. {companyConfig.companyRegistrationNumber}.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D3B15F]" />
              Official Agape Mall Portal
            </span>
            <span>Ghana Jurisdiction ({companyConfig.jurisdiction})</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
